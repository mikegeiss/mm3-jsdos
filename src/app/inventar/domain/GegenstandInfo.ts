import { Map } from './Dictionary';

export abstract class GegenstandsInfo {
  possibleClasses: Map<boolean> = {};
  availableClasses: string[] = ['Ritter', 'Paladin', 'Bogenschütze', 'Kleriker', 'Zauberer', 'Dieb', 'Ninja', 'Barbar', 'Druide', 'Waldläufer'];
  itemType: string;
  schaden: number;
  ruestungsklasse: number;
  wert: number;
  klassen: string;

  isPossible(klasse: string): boolean {
    return this.possibleClasses[klasse];
  }

  parsePossibleClasses(klassen: string) {
    this.availableClasses.forEach((klasse, index) => {
      this.possibleClasses[klasse] = klassen.charAt(index) !== '-';
    });

  }
}
