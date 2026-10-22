import { ConfigProvider } from 'tabby-core';
/** @hidden */
export declare class HomepageConfigProvider extends ConfigProvider {
    defaults: {
        ogHomepagePlugin: {
            debugLevel: number;
            autoInit: "opaqueglasshomepage.settings.option_plugin";
            doubleClickToOpen: boolean;
            btnOnLeftToolbar: boolean;
            homepageBtnWeight: number;
        };
        hotkeys: {
            oghomepage_open: any[];
        };
    };
}
