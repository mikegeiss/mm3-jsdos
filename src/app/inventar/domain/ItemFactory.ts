import { Gegenstand } from './Gegenstand';
import { MMDictionary } from './Dictionary';
import { ElementZusatz } from './ElementZusatz';
import { Material } from './Material';
import { ItemBonus } from './ItemBonus';
import { GegenstandsInfo } from './GegenstandInfo';
import { Waffe } from './Waffe';
import { Ruestung } from './Ruestung';
import { Verschiedenes } from './Verschiedenes';
import { WaffenInfo } from './WaffenInfo';

export class ItemFactory {

  public static createItem(itemProperties: string[], currentCharClass: string): Gegenstand | null {
    // Zustand 1
    // spell = 6
    const typ: string = MMDictionary.itemTypes[itemProperties[0]];
    const equippedStatusHex: string = itemProperties[0];
    const elementZusatz: ElementZusatz = MMDictionary.arten[itemProperties[2]];

    const material: Material = MMDictionary.material[itemProperties[3]];
    const bonus: ItemBonus = MMDictionary.itemBonus[itemProperties[4]];
    const name: string = MMDictionary.items[itemProperties[5]];

    const itemInfo: GegenstandsInfo = MMDictionary.itemInfos[name];

    if (itemInfo != null) {
      const itemType: string = itemInfo.itemType;
      
      if (['einhändig', 'zweihändig', 'Fernkampf'].indexOf(itemType) !== -1) {
        return new Waffe(name, itemInfo as WaffenInfo, material, elementZusatz, bonus, currentCharClass, equippedStatusHex);
      }
      if (['Rüstung', 'Hand', 'Gürtel', 'Handschuhe', 'Helm', 'Mantel', 'Stiefel'].indexOf(itemType) !== -1) {
        return new Ruestung(name, itemInfo, material, elementZusatz, bonus, currentCharClass, equippedStatusHex);
      }
      if (['Kette', 'Medaillon', 'Ring', 'UNKNOWN'].indexOf(itemType) !== -1) {
        return new Verschiedenes(name, itemInfo, material, elementZusatz, bonus, currentCharClass, equippedStatusHex);
      }
    }
    return null;
  }

}
