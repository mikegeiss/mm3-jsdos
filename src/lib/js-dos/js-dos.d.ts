import { DosCommandInterface } from "./js-dos-ci";
import { DosFS } from "./js-dos-fs";
import { DosOptions } from "./js-dos-options";
export declare type DosFactory = (canvas: HTMLCanvasElement, options?: DosOptions) => DosReadyPromise;
declare const Dos: DosFactory;
export default Dos;
export declare type DosMainFn = (args?: string[]) => Promise<DosCommandInterface>;
export interface DosRuntime {
    fs: DosFS;
    main: DosMainFn;
}
export interface DosReadyPromise extends Promise<DosRuntime> {
    ready: (onready: (fs: DosFS, main: DosMainFn) => void) => Promise<DosRuntime>;
}
