import { Gegenstand } from './Gegenstand';
import { WaffenInfo } from './WaffenInfo';
import { ItemBonus } from './ItemBonus';
import { ElementZusatz } from './ElementZusatz';
import { Material } from './Material';
import { GegenstandsInfo } from './GegenstandInfo';

export class Waffe extends Gegenstand {

  schadenString: string;

  constructor(
    public name: string,
    public info: WaffenInfo,
    public material: Material,
    public elementZusatz: ElementZusatz,
    public bonus: ItemBonus,
    public currentCharClass: string,
    public equippedStatusHex: string
  ) {
    super(info, material);
    // this.schadenString = `${this.getMinSchaden()}-${this.getMaxSchaden()}`
    // this.schadenString +=
    //     (this.elementZusatz && this.elementZusatz.name ) ? ` (+ ${this.elementZusatz.schaden} ${this.elementZusatz.name})` : "";
  }

  public isPossibleForKlasse(klasse: string): boolean {
    return this.info.isPossible(klasse);
  }

  public isPossible(): boolean {
    return this.info.isPossible(this.currentCharClass);
  }

  public isOneHanded(): boolean {
    return this.info.itemType !== 'zweihändig';
  }

  public getWaffenInfo(): WaffenInfo {
    return this.info;
  }

  public getMaxSchaden(): number {
    return this.info.maxSchaden + this.material.physischerSchaden;
  }

  public getMinSchaden(): number {
    return this.info.minSchaden + this.material.physischerSchaden;
  }

  public getElementSchaden(): number {
    return this.elementZusatz.schaden;
  }

  public getElement(): string {
    return this.elementZusatz.element;
  }

  public toString(): string {
    return this.getTragbarString() +
           this.getEquippedString() +
           (this.bonus ? this.bonus : '') +
           ' ' + this.material + this.name + '\t ' + this.getMinSchaden() + '-' + this.getMaxSchaden() +
           this.getBonusString() +
           this.getElementarSchadenString() +
           this.getElementarWiderstandString();

  }

  getInfo(): GegenstandsInfo {
    return this.info;
  }

// public compareTo(o:any):number {
//   Double avgSchaden = ((double)getMinSchaden() + (double)getMaxSchaden())/2;
//   Waffe w = (Waffe)o;
//   Double otherAvgSchaden = ((double)w.getMinSchaden() + (double)w.getMaxSchaden()) / 2;
//   return avgSchaden.compareTo(otherAvgSchaden);
// }

}
