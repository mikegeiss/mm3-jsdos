import { DosKeyEventConsumer } from "../js-dos-ci";
export interface QwertyOptions {
    uppercase: boolean;
    cssText?: string;
}
export default function Qwerty(zone: HTMLDivElement, consumer: DosKeyEventConsumer, options?: QwertyOptions): void;
