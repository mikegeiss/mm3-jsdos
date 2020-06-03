import { DosModule } from "./js-dos-module";
export declare class DosUi {
    private canvas;
    private dos;
    private overlay;
    private loaderMessage;
    private hidden;
    constructor(dos: DosModule);
    onprogress(stage: string, total: number, loaded: number): void;
    detach(): void;
    hide(): void;
    show(): void;
    private onprogressFallback;
    private childById;
    private css;
    private overlayHtml;
}
