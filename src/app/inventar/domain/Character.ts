import { MMDictionary } from './Dictionary';
import { Gegenstand } from './Gegenstand';
import { ItemFactory } from './ItemFactory';
import { Waffe } from './Waffe';
import { Ruestung } from './Ruestung';
import { Verschiedenes } from './Verschiedenes';

export class Character {
  charAsHex: string[];
  id: string;
  name: string;
  level: number;
  klasse: string;
  public items: Gegenstand[] = [];
  public waffen: Waffe[] = [];
  public ruestungen: Ruestung[] = [];
  public verschiedenes: Verschiedenes[] = [];
  public ringe: Verschiedenes[] = [];
  public medaillons: Verschiedenes[] = [];
  private readonly GESCHLECHT_POSITION = 16;
  private readonly RASSE_POSITION = 17;
  private readonly KLASSE_POSITION = 19;
  private readonly STUFE_POSITION = 35;
  private readonly ALTER_POSITION = 38;
  private readonly ITEMS_POSITION = 125;

  //
  // int RINGE_MAX = 10;
  // int MEDAILLONS_MAX = 4;
  //
  //

  constructor(charAsHex: string[], name: string) {
    this.id = name.replace(' ', '');
    this.name = name;
    this.charAsHex = charAsHex;
    this.level = parseInt(charAsHex[this.STUFE_POSITION], 16);
    this.klasse = MMDictionary.klassen[charAsHex[this.KLASSE_POSITION]];

    this.retrieveItemsFromHex();
  }

  retrieveItemsFromHex() {
    const itemPropertyPositions: any[] = [
      {pos: 125, was: 'itemType'},
      {pos: 144},
      {pos: 163, was: 'elementZusatz'},
      {pos: 182, was: 'Material'},
      {pos: 201, was: 'Bonus'},
      {pos: 220},
      {pos: 239}
    ];
    const INVENTORY_SIZE = 18;
    const inventoryPositions = Array.from(Array(INVENTORY_SIZE).keys());

    inventoryPositions.forEach((inventoryPosition: number) => {
      const itemPropertiesHexValues = itemPropertyPositions.map((position): string => {
        return this.charAsHex.slice((position.pos + inventoryPosition), (position.pos + inventoryPosition + 1))[0];
      });

      const item: Gegenstand = ItemFactory.createItem(itemPropertiesHexValues, this.klasse);

      if (item) {
        this.items.push(item);
        this.addItemToCorrespondingCollection(item);
      }
    });
  }

  private addItemToCorrespondingCollection(item: Gegenstand) {
    if (item instanceof Waffe) {
      this.waffen.push(item);
    }
    else if (item instanceof Ruestung) {
      this.ruestungen.push(item);
    }
    else if (item instanceof Verschiedenes) {
      const verschiedenesItem = item;
      this.verschiedenes.push(verschiedenesItem);
      if (item.getInfo().itemType === 'Medaillon') {
        this.medaillons.push(verschiedenesItem);
      }
      else if (item.getInfo().itemType === 'Ring') {
        this.ringe.push(verschiedenesItem);
      }
    }

  }
}

//
// }

//
// public
// void printItems()
// {
//   for (Gegenstand item : items
// )
//   {
//     //	System.out.println(item.item + " (" + item.material + "):\n\t\t ");
//   }
// }
//
// public
// void printItemHex()
// {
//   System.out.println(name);
//   System.out.println(charAsHex.substring(125 * 2, 142 * 2));
//   System.out.println(charAsHex.substring(144 * 2, 161 * 2));
//   System.out.println(charAsHex.substring(163 * 2, 180 * 2));
//   System.out.println(charAsHex.substring(182 * 2, 199 * 2));
//   System.out.println(charAsHex.substring(201 * 2, 218 * 2));
//   System.out.println(charAsHex.substring(220 * 2, 237 * 2));
//   System.out.println(charAsHex.substring(239 * 2, 256 * 2));
//   System.out.println();
// }
//
// public
// String
// printWeapons()
// {
//   String
//   out = "";
//   for (Waffe waffe : waffen
// )
//   {
//     String
//     tragbar = "";
//     if (!waffe.isPossible()) {
//       tragbar = "!";
//     }
//     out += tragbar + waffe.toString() + "\r\n";
//     // out += waffe.toString() + "<br />";
//   }
//   return out;
// }
//
// public
// String
// printRuestung()
// {
//   String
//   out = "";
//   for (Ruestung ruestung : ruestungen
// )
//   {
//     String
//     tragbar = "";
//     if (!ruestung.isPossible()) {
//       tragbar = "!";
//     }
//     out += tragbar + ruestung.toString() + "\r\n";
//     // out += ruestung.toString() + "<br />";
//   }
//   return out;
// }
//
// public
// String
// printVerschiedenes()
// {
//   String
//   out = "";
//   for (Verschiedenes curr : verschiedenes
// )
//   {
//     String
//     tragbar = "";
//     if (!curr.isPossible()) {
//       tragbar = "!";
//     }
//     out += tragbar + curr.toString() + "\r\n";
//     // out += ruestung.toString() + "<br />";
//   }
//   return out;
// }
//
// String
// getBytesAtPosition(String
// s, int
// pos
// )
// {
//   return (s.charAt(pos * 2) + "" + "" + s.charAt(pos * 2 + 1));
// }
//
// @Override
// public
// String
// toString()
// {
//   String
//   out = this.name + "\n";
//   out += "--------------------\n";
//   out += printWeapons() + "\n";
//   out += printRuestung() + "\n";
//   out += printVerschiedenes() + "\n";
//   return out;
// }
//
// public
// boolean
// profitsFromItem(Gegenstand
// g
// )
// {
//   if (!g.isPossible(this.klasse)) {
//     return false;
//   }
//   if (g instanceof Verschiedenes) {
//     if (!maximumOfItemsReached(g.getInfo().getItemType())) {
//       return true;
//     }
//     else {
//       return itemIsBetterThanAnEquippedOne(g);
//     }
//   }
//   else if (g instanceof Ruestung) {
//     Ruestung
//     r = (Ruestung)
//     g;
//     for (Ruestung ruestung : ruestungen
//   )
//     {
//       if (ruestung.isEquipped() && ruestung.getInfo().itemType.equals(r.getInfo().itemType)) {
//         if (r.compareTo(ruestung) == 1) {
//           return true;
//         }
//       }
//     }
//   }
//   else if (g instanceof Waffe) {
//     Waffe
//     w = (Waffe)
//     g;
//     for (Waffe waffe : waffen
//   )
//     {
//       if (waffe.isEquipped() && waffe.getInfo().itemType.equals(w.getInfo().itemType)) {
//         if (w.compareTo(waffe) == 1) {
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// }
//
// private
// boolean
// itemIsBetterThanAnEquippedOne(Gegenstand
// g
// )
// {
//   ArrayList < Verschiedenes > currentList;
//   String
//   itemType = g.getInfo().getItemType();
//   if (itemType.equals("Ring")) {
//     currentList = ringe;
//   }
//   else if (itemType.equals("Medaillon")) {
//     currentList = medaillons;
//   }
//   else {
//     currentList = new ArrayList<Verschiedenes>();
//   }
//   boolean
//   itemIsBetterThanAnEquippedOne = false;
//   for (Verschiedenes verschiedenes : currentList
// )
//   {
//     itemIsBetterThanAnEquippedOne = itemIsBetterThanAnEquippedOne || g.compareTo(verschiedenes) != -1;
//   }
//   return itemIsBetterThanAnEquippedOne;
//
// }

// private
// boolean
// maximumOfItemsReached(String
// itemType
// )
// {
//   ArrayList < Verschiedenes > currentList;
//   int
//   maxNumberOfItems = 0;
//   if (itemType.equals("Ring")) {
//     currentList = ringe;
//     maxNumberOfItems = RINGE_MAX;
//   }
//   else if (itemType.equals("Medaillon")) {
//     currentList = medaillons;
//     maxNumberOfItems = MEDAILLONS_MAX;
//   }
//   else {
//     currentList = new ArrayList<Verschiedenes>();
//   }
//   int
//   number = 0;
//   for (Verschiedenes verschiedenes : currentList
// )
//   {
//     if (verschiedenes.isEquipped()) {
//       number++;
//     }
//   }
//   return (maxNumberOfItems == number);
// }

// }
