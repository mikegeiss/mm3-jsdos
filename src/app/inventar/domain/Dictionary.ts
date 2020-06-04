import {ElementZusatz} from "./ElementZusatz";
import {WaffenInfo} from "./WaffenInfo";
import {RuestungInfo} from "./RuestungInfo";
import {ItemBonus} from "./ItemBonus";
import {Material} from "./Material";
import { asHex } from 'src/app/helper';

export interface Map<T> {
  [key: string]: T;
}

export class MMDictionary {

  public static items: Map<string> = {};
  public static itemInfos: Map<any> = {};
  public static klassen: Map<string> = {};
  public static arten: Map<ElementZusatz> = {};
  public static itemTypes: Map<string> = {};
  public static itemBonus: Map<ItemBonus> = {};
  public static material: Map<Material> = {};
  // public static HashMap<String, String> klassenDict = new HashMap<String, String>();
  // public static HashMap<String, String> itemTypeDict = new HashMap<String, String>();
  // public static HashMap<String, Material> materialDict = new HashMap<String, Material>();
  // public static HashMap<String, GegenstandsInfo> itemInfoDict = new HashMap<String, GegenstandsInfo>();
  // //public static HashMap<String, WaffenInfo> waffen = new HashMap<String, WaffenInfo>();
  // //public static HashMap<String, RuestungInfo> ruestungen = new HashMap<String, RuestungInfo>();
  // //public static HashMap<String, RuestungInfo> verschiedenes = new HashMap<String, RuestungInfo>();
  // public static HashMap<String, ElementZusatz> artenDict = new HashMap<String, ElementZusatz>();
  // public static HashMap<String, Verzauberung> verzauberungenDict = new HashMap<String, Verzauberung>();
  // public static HashMap<String, ItemBonus> bonusDict = new HashMap<String, ItemBonus>();

  static init() {
    this.initItems();
    this.initKlassen();
    this.initArten();
    this.initItemMaterial();
    this.initItemTypes();
    this.initItemBonus();
  }

  static initItems() {
    [
      "-",
      "Langschwert", "Kurzschwert", "Breitschwert", "Skimitar", "Messer", "Säbel", "Stock",
      "Axt", "Katana", "Nunchakas", "Wakazashi", "Dolch", "Keule", "Prügel", "Knüppel", "Totschläger",
      "Speer", "Bartaxt", "Glefe", "Hellebarde", "Pike", "Flamberge", "Dreizack", "Stab", "Hammer",
      "Naginata", "Streitaxt", "Großaxt", "Hammeraxt", "Kurzbogen", "Langbogen", "Armbrust", "Schleuder",
      "Polsterrüstung", "Lederrüstung", "Schuppenrüstung", "Ringpanzer", "Kettenpanzer", "Schienenpanzer",
      "Plattenpanzer", "Plattenrüstung", "Schild", "Helm", "Krone", "Tiara", "Handschuhe", "Ring", "Stiefel",
      "Mantel", "Robe", "Umhang", "Gürtel", "Brosche", "Medaillon", "Gemme", "Kamee", "Skarabäus",
      "Anh�nger", "Kette", "Amulett", "Stab", "Juwel", "Edelstein", "Kiste", "Kugel", "Horn", "Münze",
      "Stab", "Flöte", "Trank", "Schrift Rolle", "Fackel", "Seil mit Haken", "Nutzl. Ding", "Juwelen",
      "Grüner Augapfel Schlüssel", "Roter Krieger Schlüssel", "Heiliger Silber Schädel", "Gutes Artefakt",
      "Neutrales Artefakt", "Böses Artefakt", "Juwelen", "Perle d. Jugend+Schönheit",
      "Schw. Terror Schlüssel", "Königskugel d. Macht", "Pechbringer", "Goldener Meister Schlüssel",
      "Quatloo Münze", "Hologramm Sequenz Karte 001", "Gelber Festungs Schlüssel",
      "Blauer unheiliger Schlüssel", "Hologramm Sequenz Karte 002", "Hologramm Sequenz Karte 003",
      "Hologramm Sequenz Karte 004", "Hologramm Sequenz Karte 005", "Hologramm Sequenz Karte 006",
      "Z Gegenstand 23", "Blaue Paß Karte", "Transport Kiste", "Machttrank", "Goldene Pyramiden Karte",
      "Alakon des Icarus", "Meermuschel der Gelassenheit"]
      .forEach((value, index) => {
        this.items[asHex(index)] = value;
      });

    this.itemInfos = {
      "Stock": new WaffenInfo("1-3", "einhändig", "RPBKZDNBDW", 1),
      "Dolch": new WaffenInfo("2-4", "einhändig", "RPB-ZDNBDW", 8),
      "Knüppel": new WaffenInfo("1-6", "einhändig", "RPBK-DNBDW", 15),
      "Kurzschwert": new WaffenInfo("2-6", "einhändig", "RPB--D---W", 15),
      "Nunchakus": new WaffenInfo("2-6", "einhändig", "RP----N---", 30),
      "Axt": new WaffenInfo("2-6", "einhändig", "RPB--DNBDW", 10),
      "Totschläger": new WaffenInfo("1-8", "einhändig", "RPBK-DNBDW", 30),
      "Speer": new WaffenInfo("1-9", "einhändig", "RPB--DNBDW", 15),
      "Messer": new WaffenInfo("2-8", "einhändig", "RPB--D---W", 40),
      "Stab": new WaffenInfo("2-8", "zweihändig", "RPBKZDNBDW", 40),
      "Keule": new WaffenInfo("2-8", "einhändig", "RPBK-DNBDW", 50),
      "Prügel": new WaffenInfo("1-10", "einhändig", "RPBK-DNBDW", 100),
      "Skimitar": new WaffenInfo("2-10", "einhändig", "RPB--D---W", 80),
      "Hammer": new WaffenInfo("2-10", "zweihändig", "RPBK-DNBDW", 120),
      "Langschwert": new WaffenInfo("3-9", "einhändig", "RPB--D---W", 50),
      "Wakazashi": new WaffenInfo("3-9", "einhändig", "RP----N---", 60),
      "Säbel": new WaffenInfo("4-8", "einhändig", "RPB--D---W", 60),
      "Dreizack": new WaffenInfo("2-12", "zweihändig", "RPB--DNB-W", 100),
      "Breitschwert": new WaffenInfo("3-12", "einhändig", "RPB--D---W", 100),
      "Glefe": new WaffenInfo("4-12", "zweihändig", "RPB--DNB-W", 80),
      "Katana": new WaffenInfo("4-12", "zweihändig", "RP----N---", 150),
      "Streitaxt": new WaffenInfo("3-15", "zweihändig", "RPB--D-B-W", 100),
      "Pike": new WaffenInfo("3-16", "zweihändig", "RPB--DNB-W", 150),
      "Bartaxt": new WaffenInfo("4-16", "zweihändig", "RPB--DNB-W", 200),
      "Naginata": new WaffenInfo("5-15", "zweihändig", "RP----N---", 300),
      "Großaxt": new WaffenInfo("3-18", "zweihändig", "RPB--D-B-W", 200),
      "Hellebarde": new WaffenInfo("3-18", "zweihändig", "RPB--DNB-W", 250),
      "Hammeraxt": new WaffenInfo("3-21", "zweihändig", "RPB--D-B-W", 300),
      "Flamberge": new WaffenInfo("4-20", "zweihändig", "RPB------W", 400),
      "Schleuder": new WaffenInfo("2-4", "Fernkampf", "RPB--DNB-W", 15),
      "Kurzbogen": new WaffenInfo("3-6", "Fernkampf", "RPB--DNB-W", 25),
      "Armbrust": new WaffenInfo("4-8", "Fernkampf", "RPB--DNB-W", 50),
      "Langbogen": new WaffenInfo("5-10", "Fernkampf", "RPB--DNB-W", 100),

      "Polsterrüstung": new RuestungInfo(2, "Rüstung", "RPBKZDNBDW", 20),
      "Lederrüstung": new RuestungInfo(3, "Rüstung", "RPBK-DNBDW", 40),
      "Schuppenrüstung": new RuestungInfo(4, "Rüstung", "RPBK-DNB-W", 100),
      "Ringpanzer": new RuestungInfo(5, "Rüstung", "RPBK-DN--W", 200),
      "Kettenpanzer": new RuestungInfo(6, "Rüstung", "RPBK-D---W", 400),
      "Schienenpanzer": new RuestungInfo(7, "Rüstung", "RP-K-----W", 600),
      "Plattenpanzer": new RuestungInfo(8, "Rüstung", "RP--------", 1000),
      "Plattenrüstung": new RuestungInfo(10, "Rüstung", "RP--------", 2000),
      "Schild": new RuestungInfo(4, "Hand", "RP-K-D-B-W", 100),

      "Amulett": new RuestungInfo(0, "Kette", "RPBKZDNBDW", 2000),
      "Anhänger": new RuestungInfo(0, "Kette", "RPBKZDNBDW", 500),
      "Brosche": new RuestungInfo(0, "Medaillon", "RPBKZDNBDW", 250),
      "Edelstein": new RuestungInfo(0, "Hand", "RPBKZDNBDW", 500),
      "Flöte": new RuestungInfo(0, "Hand", "RPBKZDNBDW", 10),
      "Gemme": new RuestungInfo(0, "Medaillon", "RPBKZDNBDW", 50),
      "Gürtel": new RuestungInfo(0, "Gürtel", "RPBKZDNBDW", 100),
      "Handschuhe": new RuestungInfo(1, "Handschuhe", "RPBKZDNBDW", 100),
      "Helm": new RuestungInfo(2, "Helm", "RPBKZDNBDW", 60),
      "Horn": new RuestungInfo(0, "Hand", "RPBKZDNBDW", 20),
      "Juwel": new RuestungInfo(0, "Hand", "RPBKZDNBDW", 1000),
      "Kamee": new RuestungInfo(0, "Medaillon", "RPBKZDNBDW", 300),
      "Kette": new RuestungInfo(0, "Kette", "RPBKZDNBDW", 1000),
      "Kiste": new RuestungInfo(0, "Hand", "RPBKZDNBDW", 10),
      "Krone": new RuestungInfo(0, "Helm", "RPBKZDNBDW", 1000),
      "Kugel": new RuestungInfo(0, "Hand", "RPBKZDNBDW", 100),
      "Mantel": new RuestungInfo(1, "Mantel", "RPBKZDNBDW", 250),
      "Medaillon": new RuestungInfo(0, "Medaillon", "RPBKZDNBDW", 100),
      "Münze": new RuestungInfo(0, "Hand", "RPBKZDNBDW", 10),
      "Quatloo Münze": new RuestungInfo(0, "Hand", "RPBKZDNBDW", 0),
      "Ring": new RuestungInfo(0, "Ring", "RPBKZDNBDW", 100),
      "Robe": new RuestungInfo(1, "Mantel", "RPBKZDNBDW", 150),
      "Schriftrolle": new RuestungInfo(0, "Hand", "RPBKZDNBDW", 100),
      "Skarabäus": new RuestungInfo(0, "Medaillon", "RPBKZDNBDW", 100),
      // "Stab": new RuestungInfo("0", "Hand", "RPBKZDNBDW", "50"),
      "Stiefel": new RuestungInfo(1, "Stiefel", "RPBKZDNBDW", 40),
      "Tiara": new RuestungInfo(0, "Helm", "RPBKZDNBDW", 200),
      "Trank": new RuestungInfo(0, "Hand", "RPBKZDNBDW", 10),
      "Umhang": new RuestungInfo(1, "Mantel", "RPBKZDNBDW", 200),
    }
  }

  static initKlassen() {
    ["Ritter", "Paladin", "Bogenschütze", "Kleriker", "Zauberer", "Dieb", "Ninja", "Barbar", "Druide", "Waldläufer"]
      .forEach((value, index) => {
        this.klassen[asHex(index)] = value;
      });
  }

  // static String integerToHex(int i) {
  // String hex = Integer.toHexString(i);
  // if (hex.length() % 2 != 0)
  // hex = "0" + hex;
  // return hex;
// }

// public static void initVerzauberungen(){

// }
  static initArten() {
    [
      new ElementZusatz("", 0, 0, ""),
      new ElementZusatz("brennend", 2, 5, "Feuer"),
      new ElementZusatz("feurig", 3, 7, "Feuer"),
      new ElementZusatz("explosiv", 4, 9, "Feuer"),
      new ElementZusatz("qualmend", 5, 12, "Feuer"),
      new ElementZusatz("flammend", 10, 15, "Feuer"),
      new ElementZusatz("siedend", 15, 20, "Feuer"),
      new ElementZusatz("lodernd", 20, 25, "Feuer"),
      new ElementZusatz("sengend", 30, 30, "Feuer"),
      new ElementZusatz("flackernd", 2, 5, "Elektrisch"),
      new ElementZusatz("funkend", 3, 7, "Elektrisch"),
      new ElementZusatz("statisch", 4, 9, "Elektrisch"),
      new ElementZusatz("blitzend", 5, 12, "Elektrisch"),
      new ElementZusatz("schockend", 10, 15, "Elektrisch"),
      new ElementZusatz("elektrisch", 15, 20, "Elektrisch"),
      new ElementZusatz("dynamisch", 20, 25, "Elektrisch"),
      new ElementZusatz("eisig", 2, 5, "Kälte"),
      new ElementZusatz("frost", 4, 10, "Kälte"),
      new ElementZusatz("einfrierend", 5, 15, "Kälte"),
      new ElementZusatz("kalt", 10, 20, "Kälte"),
      new ElementZusatz("Eis", 20, 25, "Kälte"),
      new ElementZusatz("ätzend", 2, 10, "Gift"),
      new ElementZusatz("ungesund", 4, 15, "Gift"),
      new ElementZusatz("giftig", 8, 20, "Gift"),
      new ElementZusatz("toxisch", 16, 25, "Gift"),
      new ElementZusatz("schändlich", 32, 40, "Gift"),
      new ElementZusatz("glühend", 2, 5, "Energie"),
      new ElementZusatz("gleißend", 3, 7, "Energie"),
      new ElementZusatz("dicht", 4, 9, "Energie"),
      new ElementZusatz("lärm", 5, 11, "Energie"),
      new ElementZusatz("kraft", 10, 13, "Energie"),
      new ElementZusatz("Thermal", 15, 15, "Energie"),
      new ElementZusatz("Strahlend", 20, 20, "Energie"),
      new ElementZusatz("kinetisch", 30, 25, "Energie"),
      new ElementZusatz("mystisch", 5, 5, "Magie"),
      new ElementZusatz("magisch", 10, 10, "Magie"),
      new ElementZusatz("ektoplasm", 25, 20, "Magie")]
      .forEach((value, index) => {
        this.arten[asHex(index)] = value;
      });

  }

  static initItemTypes() {
    ["-", "Waffe (Mace)", "Schild", "Mail", "Bogen", "Helm", "Handschuh", "Brosche", "Ring", "Schuhe"]
      .forEach((value, index) => {
        this.itemTypes[asHex(index)] = value;
      });
  }

  static initItemBonus() {
    [
      new ItemBonus("", 0, ""),
      new ItemBonus("Macht", 2, "Macht"),
      new ItemBonus("Stärke", 3, "Macht"),
      new ItemBonus("Krieger", 5, "Macht"),
      new ItemBonus("Oger", 8, "Macht"),
      new ItemBonus("Riesen", 12, "Macht"),
      new ItemBonus("Donner", 17, "Macht"),
      new ItemBonus("Gewalt", 23, "Macht"),
      new ItemBonus("Kraft", 30, "Macht"),
      new ItemBonus("Drachen", 38, "Macht"),
      new ItemBonus("Photon", 47, "Macht"),
      new ItemBonus("Talent", 2, "Intelligenz"),
      new ItemBonus("Gesit", 3, "Intelligenz"),
      new ItemBonus("Weisheits", 5, "Intelligenz"),
      new ItemBonus("Gedanken", 8, "Intelligenz"),
      new ItemBonus("Kenntnis", 12, "Intelligenz"),
      new ItemBonus("Intellekt", 17, "Intelligenz"),
      new ItemBonus("Wissens", 23, "Intelligenz"),
      new ItemBonus("Genius", 30, "Intelligenz"),
      new ItemBonus("Kumpel", 2, "Persönlichkeit"),
      new ItemBonus("Freundschaft", 3, "Persönlichkeit"),
      new ItemBonus("Charm", 5, "Persönlichkeit"),
      new ItemBonus("Persönlichkeit", 8, "Persönlichkeit"),
      new ItemBonus("Charisma", 12, "Persönlichkeit"),
      new ItemBonus("Führungskraft", 17, "Persönlichkeit"),
      new ItemBonus("Ego", 23, "Persönlichkeit"),
      new ItemBonus("Heiligtums", 30, "Persönlichkeit"),
      new ItemBonus("Fix", 2, "Geschwindigkeit"),
      new ItemBonus("Raser", 3, "Geschwindigkeit"),
      new ItemBonus("Schnell", 5, "Geschwindigkeit"),
      new ItemBonus("Rapid", 8, "Geschwindigkeit"),
      new ItemBonus("Tempo", 12, "Geschwindigkeit"),
      new ItemBonus("Wind", 17, "Geschwindigkeit"),
      new ItemBonus("Beschleunigungs", 23, "Geschwindigkeit"),
      new ItemBonus("Schnelligkeits", 30, "Geschwindigkeit"),
      new ItemBonus("Scharf", 3, "Genauigkeit"),
      new ItemBonus("Akkurat", 5, "Genauigkeit"),
      new ItemBonus("Schützen", 10, "Genauigkeit"),
      new ItemBonus("Präzisions", 15, "Genauigkeit"),
      new ItemBonus("Genauigkeits", 20, "Genauigkeit"),
      new ItemBonus("Exakt", 30, "Genauigkeit"),
      new ItemBonus("Klee", 5, "Glück"),
      new ItemBonus("Zufalls", 10, "Glück"),
      new ItemBonus("Gewinner", 15, "Glück"),
      new ItemBonus("Glücks", 20, "Glück"),
      new ItemBonus("Spieler", 25, "Glück"),
      new ItemBonus("Leprechauns", 30, "Glück"),
      new ItemBonus("Energie", 4, "Hitpoints"),
      new ItemBonus("Gesundheits", 6, "Hitpoints"),
      new ItemBonus("Lebens", 10, "Hitpoints"),
      new ItemBonus("Troll", 20, "Hitpoints"),
      new ItemBonus("Vampir", 50, "Hitpoints"),
      new ItemBonus("Spruch", 4, "Spellpoints"),
      new ItemBonus("Zauber", 8, "Spellpoints"),
      new ItemBonus("Hexen", 12, "Spellpoints"),
      new ItemBonus("Magier", 16, "Spellpoints"),
      new ItemBonus("Erzmagier", 20, "Spellpoints"),
      new ItemBonus("Arkanum", 25, "Spellpoints"),
      new ItemBonus("Schutz", 2, "AC"),
      new ItemBonus("Rüstungs", 4, "AC"),
      new ItemBonus("Verteidigungs", 6, "AC"),
      new ItemBonus("Panzer", 10, "AC"),
      new ItemBonus("Gottes", 16, "AC"),
      new ItemBonus("Gauner", 4, "Thievery"),
      new ItemBonus("Einbrecher", 6, "Thievery"),
      new ItemBonus("Räuber", 8, "Thievery"),
      new ItemBonus("Bandit", 10, "Thievery"),
      new ItemBonus("Kleptomanen", 12, "Thievery"),
      new ItemBonus("Diebes", 14, "Thievery"),
      new ItemBonus("Halunken", 16, "Thievery"),
      new ItemBonus("Plünderer", 18, "Thievery"),
      new ItemBonus("Kriminellen", 20, "Thievery"),
      new ItemBonus("Piraten", 25, "Thievery")
    ]
      .forEach((value, index) => {
        this.itemBonus[asHex(index)] = value;
      });
  }

  static initItemMaterial() {
    [
      new Material("", 0, 0, 0, "*1"),
      new Material("Holz ", -3, -3, -3, "/10"),
      new Material("Leder ", -4, -6, 0, "/4"),
      new Material("Messing ", +3, -4, -2, "/2"),
      new Material("Bronze ", +2, -2, -1, "/1.33"),
      new Material("Eisen ", +1, +2, +1, "*2"),
      new Material("Silber ", +2, +4, +2, "*5"),
      new Material("Stahl ", +3, +6, +4, "*10"),
      new Material("Gold ", +4, +8, +6, "*40"),
      new Material("Platin ", +6, +10, +8, "*50"),
      new Material("Glas ", 0, 0, 0, "*2"),
      new Material("Korallen ", +1, +1, +1, "*3"),
      new Material("Kristall ", +1, +1, +1, "*5"),
      new Material("Lapis ", +2, +2, +2, "*10"),
      new Material("Perlen ", +2, +2, +2, "*20"),
      new Material("Bernstein ", +3, +3, +3, "*30"),
      new Material("Ebenholz ", +7, +4, +4, "*40"),
      new Material("Quarz ", +5, +5, +5, "*50"),
      new Material("Rubin ", +6, +12, +10, "*60"),
      new Material("Smaragd ", +7, +15, +12, "*70"),
      new Material("Saphir ", +8, +20, +15, "*80"),
      new Material("Diamant ", +9, +30, +16, "*90"),
      new Material("Obsidian ", +10, +50, +20, "*100")]
      .forEach((value, index) => {
        this.material[asHex(index)] = value;
      });
  }

//
// public static void init() {
//   initKlassen();
//   initItems();
//   initItemTypes();
//   initItemMaterial();
//   initArten();
//   initVerzauberungen();
//   initItemBonus();
//
// }
//
// public static void debugMaterials() {
//   System.out.println("Materialien");
//   System.out.println("------------");
//   for (String s : materialDict.keySet()) {
//     System.out.println(s + " - " + materialDict.get(s));
//   }
// }
//
// public static void debugItems() {
//   System.out.println("Items");
//   System.out.println("------------");
//   for (String s : itemDict.keySet()) {
//     System.out.println(s + " - " + itemDict.get(s));
//   }
// }
//
// public static void debug() {
//   debugMaterials();
//   debugItems();
//
// }


}
