import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { Usage, UsageLoadMatch } from '../ResendSdkTypes';
declare class UsageEntity extends ResendSdkEntityBase<Usage> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: UsageEntity): UsageEntity;
    load(this: any, reqmatch?: UsageLoadMatch, ctrl?: Control): Promise<UsageEntity>;
}
export { UsageEntity };
