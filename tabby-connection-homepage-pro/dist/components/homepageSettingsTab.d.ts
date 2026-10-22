import { PlatformService, TranslateService } from "tabby-core";
import { ConfigService } from 'tabby-core';
export declare class HomepageSettingsTabComponent {
    config: ConfigService;
    private translate;
    private platform;
    readonly AUTO_INIT_OPTIONS: {
        readonly PLUGIN: "opaqueglasshomepage.settings.option_plugin";
        readonly ORIGINAL: "opaqueglasshomepage.settings.option_original";
        readonly PROFILE_SELECTOR: "opaqueglasshomepage.settings.option_profile_selector";
        readonly DISABLE: "opaqueglasshomepage.settings.option_disable";
    };
    readonly autoInitList: {
        key: string;
        label: "opaqueglasshomepage.settings.option_plugin" | "opaqueglasshomepage.settings.option_original" | "opaqueglasshomepage.settings.option_profile_selector" | "opaqueglasshomepage.settings.option_disable";
    }[];
    constructor(config: ConfigService, translate: TranslateService, platform: PlatformService);
    openGithub(): void;
    openNewIssue(): void;
    saveToLocalStorage(): void;
}
