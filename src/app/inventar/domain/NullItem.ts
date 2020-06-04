import { Gegenstand } from './Gegenstand';
import { GegenstandsInfo } from './GegenstandInfo';
import { Material } from './Material';
import { ItemBonus } from './ItemBonus';
import { ElementZusatz } from './ElementZusatz';

export class NullItem extends Gegenstand {

    constructor(
        public name: string,
        public itemInfo: GegenstandsInfo,
        public material: Material,
        public elementZusatz: ElementZusatz,
        public bonus: ItemBonus,
        public currentCharClass: string,
        public equippedStatusHex: string
    ) {
        super(itemInfo, material);
    }


    public compareTo(arg: any): number {
        // TODO Auto-generated method stub
        return 0;
    }


    public isPossible(klasse?: string): boolean {
        // TODO Auto-generated method stub
        return false;
    }

    public getInfo(): GegenstandsInfo {
        // TODO Auto-generated method stub
        return null;
    }

    public isPossibleForKlasse(klasse: string): boolean {
        // TODO Auto-generated method stub
        return false
    }
}