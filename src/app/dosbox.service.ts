import { Injectable } from "@angular/core";
import { DosCommandInterface } from 'src/lib/js-dos/js-dos-ci';
import { DosFactory, DosMainFn } from 'src/lib/js-dos/js-dos';
import { DosBoxConfig } from 'src/lib/js-dos/js-dos-options';
import { DosFS } from 'src/lib/js-dos/js-dos-fs';

@Injectable()
export class DosboxService {

    public ci: DosCommandInterface;

    public init(canvas: HTMLCanvasElement) {
        const Dos = (window as any).Dos as DosFactory;
        const dosOptions: DosBoxConfig = {}
        Dos(canvas, dosOptions).ready((fs, main) => this.runMightAndMagic3(fs, main));
    }

    private async runMightAndMagic3(fs: DosFS, main: DosMainFn) {
        console.log("start");
        await fs.extract("MM3.zip", "/mm3");
        this.ci = await main(["-c", "cd mm3/mm3", "-c", "copy mm3.cfg C:\\ifacdmm3.cfg", "-c", "MM3.COM"]);
        // Qwerty(ci.getParentDiv(), ci.getKeyEventConsumer());
    }

}