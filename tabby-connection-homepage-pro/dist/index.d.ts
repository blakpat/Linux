import { ConfigService, ProfilesService } from 'tabby-core';
import { HomepageTranslateService } from 'services/translateService';
import { AppService, HostAppService } from 'tabby-core';
export default class HomepageModule {
    constructor(hostApp: HostAppService, app: AppService, config: ConfigService, translate: HomepageTranslateService, profilesService: ProfilesService);
}
