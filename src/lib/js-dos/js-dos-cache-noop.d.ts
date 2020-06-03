import { ICache } from "./js-dos-cache";
export default class CacheNoop implements ICache {
    put(key: string, data: any, onflush: () => void): void;
    get(key: string, ondata: (data: any) => void, onerror: (msg: string) => void): void;
    forEach(each: (key: string, value: any) => void, onend: () => void): void;
}
