import { Gegenstand } from './Gegenstand';
import { RuestungInfo } from './RuestungInfo';
import { Material } from './Material';
import { ElementZusatz } from './ElementZusatz';
import { ItemBonus } from './ItemBonus';

export class Verschiedenes extends Gegenstand {

  constructor(
    public name: string,
    public info: RuestungInfo,
    public material: Material,
    public elementZusatz: ElementZusatz,
    public bonus: ItemBonus,
    public currentCharClass: string,
    public equippedStatusHex: string
  ) {
    super(info, material);
  }

  public toString(): string {
    return this.getTragbarString() + this.getEquippedString() +
           (this.bonus ? this.bonus.name : '') +
           ' ' + this.material + this.name + '\t ' + this.getRuestungsKlasse() +
           this.getBonusString() +
           this.getElementarSchadenString() +
           this.getElementarWiderstandString();

  }

  public getInfo(): RuestungInfo {
    return this.info;
  }

  public getElementWiderstand(): number {
    return this.elementZusatz.widerstand;
  }

  public getElement(): string {
    return this.elementZusatz.element;
  }

  public isPossibleForKlasse(klasse: string): boolean {
    return this.info.isPossible(klasse);
  }

// @Override
// public int compareTo(Object o) {
//   Integer ruestungInt = getRuestungsKlasse();
//   Integer otherRuestungInt = ((Verschiedenes) o).getRuestungsKlasse();
//   return ruestungInt.compareTo(otherRuestungInt);
// }

  public isPossible(): boolean {
    return this.info.isPossible(this.currentCharClass);
  }

  private getRuestungsKlasse(): number {
    return this.info.ruestungsklasse + this.material.ruestungsklasse;
  }
}
