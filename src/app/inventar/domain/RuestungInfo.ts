import { GegenstandsInfo } from './GegenstandInfo';

export class RuestungInfo extends GegenstandsInfo {

  constructor(
    public ruestungsklasse: number,
    public itemType: string,
    public klassen: string,
    public wert: number) {
    super();
    this.parsePossibleClasses(klassen);
  }
}
