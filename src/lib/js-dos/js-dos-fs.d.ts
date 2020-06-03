import { DosModule } from "./js-dos-module";
export interface DosArchiveSource {
    url: string;
    mountPoint: string;
    type?: "zip";
}
export declare class DosFS {
    private dos;
    private em;
    private fs;
    private syncingPromise;
    private lastSyncTime;
    constructor(dos: DosModule);
    chdir(path: string): void;
    extract(url: string, mountPoint?: string, type?: "zip"): Promise<void>;
    extractAll(sources: DosArchiveSource[]): Promise<void>;
    createFile(file: string, body: ArrayBuffer | Uint8Array | string): void;
    private createPath;
    private syncFs;
    private normalizePath;
    private readOk;
    private writeOk;
}
