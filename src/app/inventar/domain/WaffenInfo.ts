import {GegenstandsInfo} from "./GegenstandInfo";

export class WaffenInfo extends GegenstandsInfo {

  minSchaden: number;
  maxSchaden: number;
  wert: number;

  constructor(schaden: string, typ: string, klassen: string, wert: number) {
    super();
    const schadenSplitted = schaden.split("-");
    this.itemType = typ;
    this.minSchaden = parseInt(schadenSplitted[0]);
    this.maxSchaden = parseInt(schadenSplitted[1]);
    this.parsePossibleClasses(klassen);
    this.wert = wert;
  }

  toString(): string {
    return this.itemType + " " + this.klassen;
  }

}
