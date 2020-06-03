import { Component, OnInit } from "@angular/core";
import { DosboxService } from '../dosbox.service';
import { Key } from '../key.type';

@Component({
    selector: "keyboard",
    templateUrl: "./keyboard.component.html",
    styleUrls: ["./keyboard.component.less"]
})
export class KeyboardComponent implements OnInit {
    constructor(private dosboxService: DosboxService) { }
    public ngOnInit(): void {
        this.configureKeyListener("key_esc", Key.Escape);
        this.configureKeyboardListener();
    }

    private configureKeyboardListener() {
        const numbers = Array.from(Array(26).keys());
        console.log(numbers);
        numbers
            .map((n) => String.fromCharCode(65 + n))
            .forEach((letter) => this.configureKeyListener("key_" + letter, Key[letter]))
        // var chr = String.fromCharCode(65); // where n is 0, 1, 2 .
    }

    private configureKeyListener(id: string, key: Key) {
        document.getElementById(id).onclick = () => {
            this.dosboxService.ci.simulateKeyPress(key);
        }
    }
}