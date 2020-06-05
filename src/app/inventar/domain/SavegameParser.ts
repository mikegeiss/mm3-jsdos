import { Character } from './Character';
import { MMDictionary } from './Dictionary';

export class SavegameParser {

  private parsedSavegame: any;

  constructor() {

    MMDictionary.init();
  }

  parseChars(savegame: string[]): Character[] {
    if (!savegame) {
      return [];
    }
    return [
      new Character(savegame.slice(1953, 3771 - 1), 'Sir Canegm'),
      new Character(savegame.slice(6195, 7407 - 1), 'Crag Hack'),
      new Character(savegame.slice(7407, 8013 - 1), 'Maximus'),
      new Character(savegame.slice(4377, 5286 - 1), 'Dark Shade'),
      new Character(savegame.slice(5286, 6195 - 1), 'Resurectra'),
      new Character(savegame.slice(3771, 4377 - 1), 'Kastore')

    ].map((value: Character) => {
      delete value.charAsHex;
      return value;
    });
  }
}
