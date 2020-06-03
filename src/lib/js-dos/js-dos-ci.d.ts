import { DosModule } from "./js-dos-module";
export interface DosKeyEventConsumer {
    onPress(keyCode: number): void;
    onRelease(keyCode: number): void;
}
export declare class DosCommandInterface {
    dos: DosModule;
    private em;
    private api;
    private onready;
    private shellInputQueue;
    private shellInputClients;
    private onstdout?;
    private keyEventConsumer;
    private fullscreenInitialCssStyle?;
    constructor(dos: DosModule, onready: (ci: DosCommandInterface) => void);
    width(): number;
    height(): number;
    fullscreen(): void;
    exitFullscreen(): void;
    listenStdout(onstdout: (data: string) => void): void;
    shell(...cmd: string[]): Promise<any>;
    screenshot(): Promise<any>;
    exit(): 0 | -1;
    simulateKeyEvent(keyCode: number, pressed: boolean): void;
    simulateKeyPress(keyCode: number): void;
    getParentDiv(): HTMLDivElement | null;
    getKeyEventConsumer(): DosKeyEventConsumer;
    private sendKeyPress;
    private requestShellInput;
    private onping;
    private onframe;
}
