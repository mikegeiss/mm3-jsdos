import {Gegenstand} from "./Gegenstand";
import {RuestungInfo} from "./RuestungInfo";
import {GegenstandsInfo} from "./GegenstandInfo";
import {Material} from "./Material";
import {ElementZusatz} from "./ElementZusatz";
import {ItemBonus} from "./ItemBonus";

export class Verschiedenes extends Gegenstand {
  private info: RuestungInfo;

  constructor(name: string, itemInfo: GegenstandsInfo, material: Material, elementZusatz: ElementZusatz, bonus: ItemBonus, currentCharClass: string, equippedStatusHex: string) {
    super(itemInfo, material);
    this.name = name;
    this.info = <RuestungInfo> itemInfo;
    this.material = material;
    this.elementZusatz = elementZusatz;
    this.bonus = bonus;
    this.currentCharClass = currentCharClass;
    this.equippedStatusHex = equippedStatusHex;
  }

  public toString(): string {
    return this.getTragbarString() + this.getEquippedString() +
           (this.bonus ? this.bonus.name : "") +
           " " + this.material + this.name + "\t " + this.getRuestungsKlasse() +
           this.getBonusString() +
           this.getElementarSchadenString() +
           this.getElementarWiderstandString();

  }

  private getRuestungsKlasse(): number {
    return this.info.ruestungsklasse + this.material.ruestungsklasse;
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

// @Override
// public int compareTo(Object o) {
//   Integer ruestungInt = getRuestungsKlasse();
//   Integer otherRuestungInt = ((Verschiedenes) o).getRuestungsKlasse();
//   return ruestungInt.compareTo(otherRuestungInt);
// }

  public isPossibleForKlasse(klasse: string): boolean {
    return this.info.isPossible(klasse);
  }

  public isPossible(): boolean {
    return this.info.isPossible(this.currentCharClass);
  }
}
