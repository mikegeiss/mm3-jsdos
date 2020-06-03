import { ICache } from "./js-dos-cache";
interface XhrOptions {
    cache: ICache;
    method?: string;
    success?: (response: any) => void;
    progress?: (total: number, loaded: number) => void;
    fail?: (url: string, status: number, message: string) => void;
    data?: string;
    responseType?: any;
}
export declare class Xhr {
    private cache;
    private resource;
    private options;
    private xhr;
    private total;
    private loaded;
    constructor(url: string, options: XhrOptions);
    private makeHttpRequest;
    private onReadyStateChange;
}
export {};
