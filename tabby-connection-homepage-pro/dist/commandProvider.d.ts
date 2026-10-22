import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService, Command, CommandProvider, ConfigService, HostWindowService, HotkeysService, TranslateService } from 'tabby-core';
import { MySignalService } from 'services/signalService';
export declare class HomepageCommandProvider extends CommandProvider {
    private hostWnd;
    private app;
    private ngbModal;
    private signalService;
    private configService;
    private translate;
    private recentDialogRef;
    private currentStatus;
    constructor(hotkeys: HotkeysService, hostWnd: HostWindowService, app: AppService, ngbModal: NgbModal, signalService: MySignalService, configService: ConfigService, translate: TranslateService);
    private openHomepage;
    provide(): Promise<Command[]>;
}
