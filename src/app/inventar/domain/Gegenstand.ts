import { Material } from './Material';
import { ItemBonus } from './ItemBonus';
import { ElementZusatz } from './ElementZusatz';
import { GegenstandsInfo } from './GegenstandInfo';
import { Utils } from './Utils';

export abstract class Gegenstand {

  id: string;
  currentCharClass: string;
  name: string;
  material: Material;
  elementZusatz: ElementZusatz;
  bonus: ItemBonus;
  equippedStatusHex: string;
  wert: number;

  constructor(itemInfo: GegenstandsInfo, material: Material) {
    this.id = Utils.uuidv4();

    if (material.preis) {
      this.wert = this.berechneWert(itemInfo.wert, material.preis);
    }
    else {
      this.wert = itemInfo.wert;
    }

  }

  public berechneWert(wert: number, anpassung: string): number {
    const symbol = anpassung.slice(0, 1);
    const faktor: number = parseFloat(anpassung.slice(1));
    if (symbol === '*') {
      wert *= faktor;
    }
    if (symbol === '/') {
      wert /= faktor;
    }
    return parseInt(wert.toFixed(2), 10);
  }

  public abstract isPossibleForKlasse(klasse: string): boolean;

  public abstract isPossible(): boolean;

  public isEquipped(): boolean {
    return this.equippedStatusHex !== '00'; // TODO MGe - evtl steht da nur 0 drin
  }

  public getEquippedString(): string {
    return this.isEquipped() ? '+' : '-';
  }

  getTragbarString(): string {
    return this.isPossible() ? '' : '!';
  }

  getElementarSchadenString(): string {
    return this.elementZusatz.schaden > 0 ? '\n' + '(+ ' + this.elementZusatz.schaden + 'Dmg ' + this.elementZusatz.element + ')' : '';
  }

  getElementarWiderstandString(): string {
    return this.elementZusatz.widerstand > 0 ? '\n' + '(+ ' + this.elementZusatz.widerstand + 'Res ' + this.elementZusatz.element + ')' : '';
  }

  getBonusString(): string {
    if (this.bonus) {
      return this.bonus.typ !== '' ? '\n' + this.bonus : '';
    }
    return '';
    // TODO MGe -  if kann später wieder raus

  }

  public abstract getInfo(): GegenstandsInfo;

}
