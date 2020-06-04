import { Component, OnInit } from "@angular/core";
import { openDB, deleteDB, wrap, unwrap } from 'idb';
import { DbService } from './db.service';
import { SavegameParser } from './domain/SavegameParser';
import { BehaviorSubject, Subject } from 'rxjs';
import { Character } from './domain/Character';
import { Gegenstand } from './domain/Gegenstand';
import { Waffe } from './domain/Waffe';
import { Ruestung } from './domain/Ruestung';

@Component({
    selector: "inventar",
    templateUrl: "./inventar.component.html",
    styleUrls: ["./inventar.component.less"]
})
export class InventarComponent implements OnInit {
    public characters$: Subject<Character[]> = new BehaviorSubject([]);
    constructor(private dbService: DbService) { }
    public ngOnInit(): void {
        this.dbService.loadSavegame("/mm3/MM3/SAVE03.MM3").then((savegame) => {
            const chars = new SavegameParser().parseChars(savegame);
            console.log(chars[0].items);
            this.characters$.next(chars);
        });
    }

    public setCurrentItem(char: Character, item: Gegenstand) {
        // console.log(char, item);

    }

    public getItemName(item: Gegenstand) {
        // console.log('item',item);
        
        return [item.elementZusatz?.name, item.bonus?.name, item.material?.name, item.name].join(" ");
    }

    public getItemSchaden(item: Waffe) {
        let result = `${item.info.minSchaden}-${item.info.maxSchaden}`
        if (item.elementZusatz && item.elementZusatz.name) {
            result += ` (+ ${item.elementZusatz.schaden} ${item.elementZusatz.name})`;
        }
        return result;
    }

    public getItemRuestungsklasse(item: Ruestung) {
        const rkl = item.getInfo()?.ruestungsklasse + item.material?.ruestungsklasse;
        let result = "" + rkl;
        if (item.elementZusatz?.name) {
            result += ` (+ ${item.elementZusatz.widerstand} ${item.elementZusatz.name})`;
        }
        return result;
    }
}