import { GegenstandsInfo } from './GegenstandInfo';

export class WaffenInfo extends GegenstandsInfo {

  minSchaden: number;
  maxSchaden: number;
  wert: number;

  constructor(schaden: string, typ: string, public klassen: string, wert: number) {
    super();
    const schadenSplitted = schaden.split('-');
    this.itemType = typ;
    this.minSchaden = parseInt(schadenSplitted[0], 10);
    this.maxSchaden = parseInt(schadenSplitted[1], 10);
    this.parsePossibleClasses(klassen);
    this.wert = wert;
  }

  toString(): string {
    return this.itemType + ' ' + this.klassen;
  }

}
