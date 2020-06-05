import { Injectable } from "@angular/core";
import { openDB, IDBPDatabase } from 'idb';

@Injectable()
export class DbService {
    public readonly DB_NAME = "/mm3";
    public readonly STORE_NAME = "FILE_DATA";


    public async getSavegames(): Promise<string[]> {
        const db = await this.connectToDb();
        const keys: string[] = await db.getAllKeys(this.STORE_NAME) as string[];
        return keys.filter((key:string) => key.endsWith(".MM3"));
    }

    public async loadSavegame(savegame: string): Promise<string[]> {
        const db = await this.connectToDb();
        const savegameData = await db.get(this.STORE_NAME, savegame);
        return this.convertUint8ArrayToHexcharArray(savegameData.contents)
    }

    private async connectToDb(): Promise<IDBPDatabase> {
        return await openDB(this.DB_NAME, 21, {
            upgrade(db, oldVersion, newVersion, transaction) {
                console.error('upgrade needed', oldVersion, newVersion);
            }
        });
    }
    private convertUint8ArrayToHexcharArray(data: Uint8Array): string[] {
        const normalArray: number[] = Array.from(data);
        return normalArray.map((v) => {
            let hex = v.toString(16);
            return hex.length === 2 ? hex : "0" + hex;
        });
    }
}