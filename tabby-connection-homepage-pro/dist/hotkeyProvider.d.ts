import { HotkeyDescription, HotkeyProvider } from 'tabby-core';
/** @hidden */
export declare class AutoCompleteHotkeyProvider extends HotkeyProvider {
    hotkeys: HotkeyDescription[];
    constructor();
    provide(): Promise<HotkeyDescription[]>;
}
