import { ConfigService } from "tabby-core";
export declare class StyleService {
    private document;
    private configService;
    constructor(document: Document, configService: ConfigService);
    loadStyle(): void;
    removeStyle(): void;
}
