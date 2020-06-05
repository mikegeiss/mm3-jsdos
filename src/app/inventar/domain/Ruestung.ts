import { Gegenstand } from './Gegenstand';
import { RuestungInfo } from './RuestungInfo';
import { GegenstandsInfo } from './GegenstandInfo';
import { Material } from './Material';
import { ElementZusatz } from './ElementZusatz';
import { ItemBonus } from './ItemBonus';

export class Ruestung extends Gegenstand {

  ruestungString: string;

  constructor(
    public name: string,
    private info: RuestungInfo,
    public material: Material,
    public elementZusatz: ElementZusatz,
    public bonus: ItemBonus,
    public currentCharClass: string,
    public equippedStatusHex: string
  ) {
    super(info, material);
    this.name = name;

    // this.name = ((this.elementZusatz && this.elementZusatz.name) ? this.elementZusatz.name : "") + " " + this.material.name + " " + name;

    // this.ruestungString = `${this.getRuestungsKlasse()}`
    // this.ruestungString +=
    //    (this.elementZusatz && this.elementZusatz.name) ? ` (+ ${this.elementZusatz.widerstand} ${this.elementZusatz.name})` : "";
  }

  public toString(): string {
    return this.getTragbarString() + this.getEquippedString() +
           // bonus.name +
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
//   Integer otherRuestungInt = ((Ruestung) o).getRuestungsKlasse();
//   return ruestungInt.compareTo(otherRuestungInt);
// }

  public isPossible(): boolean {
    return this.info.isPossible(this.currentCharClass);
  }

  private getRuestungsKlasse(): number {
    return this.info.ruestungsklasse + this.material.ruestungsklasse;
  }

}
