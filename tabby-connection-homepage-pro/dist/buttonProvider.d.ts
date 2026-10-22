import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService, ConfigService, HostWindowService, HotkeysService, ToolbarButton, ToolbarButtonProvider } from 'tabby-core';
import { MySignalService } from 'services/signalService';
export declare class ButtonProvider extends ToolbarButtonProvider {
    private hostWnd;
    private app;
    private ngbModal;
    private signalService;
    private configService;
    private recentDialogRef;
    private currentStatus;
    constructor(hotkeys: HotkeysService, hostWnd: HostWindowService, app: AppService, ngbModal: NgbModal, signalService: MySignalService, configService: ConfigService);
    private openDevTools;
    private openHomepage;
    provide(): ToolbarButton[];
}
