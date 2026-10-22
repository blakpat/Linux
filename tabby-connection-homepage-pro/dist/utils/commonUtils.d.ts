import { AppService, BaseTabComponent, SplitTabComponent } from "tabby-core";
export declare function isValidStr(input: string): boolean;
export declare function cleanTerminalText(input: string): string;
export declare function sleep(ms: number): Promise<unknown>;
/**
 *
 * @param tab terminal标签页
 * @param cmd 待输入的命令 请注意 \\s将被认为延迟输入，\\x将被认为是16进制字符
 * @param appendCR 是否在命令后追加回车
 * @param singleLine 是否忽略换行，而一次只输入一行
 * @param clearFirst 是否在输入前清空终端
 * @param refocus 是否在输入后重新聚焦终端
 */
export declare function sendInput({ tab, cmd, appendCR, singleLine, clearFirst, refocus }: {
    tab: BaseTabComponent | SplitTabComponent;
    cmd: string;
    appendCR?: boolean;
    singleLine?: boolean;
    clearFirst?: boolean;
    refocus?: boolean;
}): Promise<void>;
export declare function inputInitScripts(app: AppService): void;
export declare function generateUUID(): string;
export declare function trimLineTextFromXterm(input: string): string;
export declare function simpleHash(str: string): string;
