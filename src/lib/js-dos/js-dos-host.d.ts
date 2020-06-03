import { ICache } from "./js-dos-cache";
import { DosModule } from "./js-dos-module";
declare class DosHost {
    wasmSupported: boolean;
    global: any;
    private wdosboxPromise;
    constructor();
    private polyfill;
    resolveDosBox(url: string, cache: ICache, module: DosModule): void;
    private compileDosBox;
    private compileJsDosBox;
    private compileWasmDosBox;
}
export declare const Host: DosHost;
export {};
