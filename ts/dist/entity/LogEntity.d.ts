import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { Log, LogLoadMatch, LogListMatch } from '../ResendSdkTypes';
declare class LogEntity extends ResendSdkEntityBase<Log> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: LogEntity): LogEntity;
    load(this: any, reqmatch?: LogLoadMatch, ctrl?: Control): Promise<LogEntity>;
    list(this: any, reqmatch?: LogListMatch, ctrl?: Control): Promise<LogEntity[]>;
}
export { LogEntity };
