import { DosKeyEventConsumer } from "../js-dos-ci";
export interface MoveOptions {
    keysCode: {
        [index: string]: number;
    };
}
export default function Move(zone: HTMLDivElement, consumer: DosKeyEventConsumer, options?: MoveOptions): void;
