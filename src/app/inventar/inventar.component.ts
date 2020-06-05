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
    public savegames$: Subject<string[]> = new BehaviorSubject([]);
    public selectedItem: Gegenstand;
    public hoveredItem: Gegenstand;
    public currentSavegame: string;

    constructor(private dbService: DbService) { }
    public ngOnInit(): void {
        this.dbService.getSavegames().then((savegames) => {
            console.log('save', savegames);

            this.savegames$.next(savegames);
        })
        // todo Bei einem kompletten Reset der DB darf dies erst ausgeführt werden, 
        // sobald die Dosbox läuft und die DB initialisiert hat


    }

    public loadSavegame(): void {
        console.log('lade Savegame:', this.currentSavegame);

        this.dbService.loadSavegame(this.currentSavegame).then((savegame) => {
            const chars = new SavegameParser().parseChars(savegame);
            console.log(chars[0].items);
            this.characters$.next(chars);
        });
    }

    public setCurrentItem(char: Character, item: Gegenstand) {
        if (this.selectedItem !== item) {
            this.selectedItem = item;
        } else {
            this.selectedItem = null;
        }
    }

    public hoverItem(item: Gegenstand) {
        this.hoveredItem = item;
    }

    public unhoverItem() {
        this.hoveredItem = null;
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