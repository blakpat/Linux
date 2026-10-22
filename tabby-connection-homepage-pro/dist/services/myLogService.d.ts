import { ConfigService, LogService } from 'tabby-core';
export declare class MyLogger {
    private configService;
    private logger;
    private name;
    constructor(log: LogService, configService: ConfigService);
    private logLevel;
    setLogLevel(level: number): void;
    getLogLevel(): number;
    messyDebug(...args: any[]): void;
    debug(...args: any[]): void;
    log(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
}
