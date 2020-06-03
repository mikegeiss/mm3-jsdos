import { DosModule } from "./js-dos-module";
export interface ICache {
    put: (key: string, data: any, onflush: () => void) => void;
    get: (key: string, ondata: (data: any) => void, onerror: (msg: string) => void) => void;
    forEach: (each: (key: string, value: any) => void, onend: () => void) => void;
}
export default function openCache(module: DosModule, onready: (cache: ICache) => void): void;
