export declare class DosBoxConfig {
    cycles?: number | string;
    autolock?: boolean;
}
export declare class DosOptions extends DosBoxConfig {
    onprogress?: (stage: string, total: number, loaded: number) => void;
    onerror?: (message: string) => void;
    log?: (message: string) => void;
    wdosboxUrl?: string;
}
export declare const DosBoxConfigDefaults: DosBoxConfig;
