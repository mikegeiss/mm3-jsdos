import { ICache } from "./js-dos-cache";
export default class CacheDb implements ICache {
    version: string;
    private storeName;
    private indexedDB;
    private db;
    constructor(version: string, onready: (cache: ICache) => void, onerror: (msg: string) => void);
    put(key: string, data: any, onflush: () => void): void;
    get(key: string, ondata: (data: any) => void, onerror: (msg: string) => void): void;
    forEach(each: (key: string, value: any) => void, onend: () => void): void;
}
