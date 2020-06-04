import {Map} from "./Dictionary";

export abstract class GegenstandsInfo {
  possibleClasses: Map<boolean> = {};
  availableClasses: string[] = ["Ritter", "Paladin", "Bogenschütze", "Kleriker", "Zauberer", "Dieb", "Ninja", "Barbar", "Druide", "Waldläufer"];
  itemType: string;
  schadenOderRkl: string;
  wert:number;

  isPossible(klasse: string): boolean {
    return this.possibleClasses[klasse];
  }

  klassen: string

  parsePossibleClasses(klassen: string) {
    this.klassen = klassen;
    this.availableClasses.forEach((klasse, index) => {
      this.possibleClasses[klasse] = klassen.charAt(index) != '-'
    })

  }
}