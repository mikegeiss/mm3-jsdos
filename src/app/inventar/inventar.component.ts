import { Component, OnInit } from "@angular/core";

@Component({
    selector: "inventar",
    templateUrl: "./inventar.component.html",
    styleUrls: ["./inventar.component.less"]
})
export class InventarComponent implements OnInit{
    public ngOnInit(): void {
        var request = window.indexedDB.open("MeineTestdatenbank", 3);
    }

}