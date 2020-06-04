import {GegenstandsInfo} from "./GegenstandInfo";

export class RuestungInfo extends GegenstandsInfo {

  ruestungsklasse: number;
  wert: number;

  constructor(ruestungsklasse: number, typ: string, klassen: string, wert: number) {
    super()
    this.itemType = typ;
    this.ruestungsklasse = ruestungsklasse;
    this.parsePossibleClasses(klassen);
    this.wert = wert
  }
}
