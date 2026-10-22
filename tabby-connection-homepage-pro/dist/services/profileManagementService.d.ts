import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService, ProfilesService, SelectorService, TranslateService, PlatformService, ProfileProvider, Profile, PartialProfile, ProfileGroup, PartialProfileGroup } from 'tabby-core';
interface CollapsableProfileGroup extends ProfileGroup {
    collapsed: boolean;
}
export declare class ProfileManagementService {
    private config;
    private profilesService;
    private selector;
    private ngbModal;
    private platform;
    private translate;
    private profileProviders;
    constructor(config: ConfigService, profilesService: ProfilesService, selector: SelectorService, ngbModal: NgbModal, platform: PlatformService, translate: TranslateService, profileProviders: ProfileProvider<Profile>[]);
    isProfileBlacklisted(profile: PartialProfile<Profile>): boolean;
    newProfile(base?: PartialProfile<Profile>): Promise<void>;
    editProfile(profile: PartialProfile<Profile>): Promise<void>;
    deleteProfile(profile: PartialProfile<Profile>): Promise<void>;
    showProfileEditModal(profile: PartialProfile<Profile>): Promise<PartialProfile<Profile> | null>;
    newProfileGroup(): Promise<void>;
    editProfileGroup(group: PartialProfileGroup<CollapsableProfileGroup>): Promise<void>;
    showProfileGroupEditModal(group: PartialProfileGroup<CollapsableProfileGroup>): Promise<PartialProfileGroup<CollapsableProfileGroup> | null>;
    private editProfileGroupDefaults;
    deleteProfileGroup(group: PartialProfileGroup<ProfileGroup>): Promise<void>;
    private static collapsableIntoPartialProfileGroup;
    private static intoPartialCollapsableProfileGroup;
}
export {};
