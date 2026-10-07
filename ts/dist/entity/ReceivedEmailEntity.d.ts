import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { ReceivedEmail, ReceivedEmailLoadMatch, ReceivedEmailListMatch } from '../ResendSdkTypes';
declare class ReceivedEmailEntity extends ResendSdkEntityBase<ReceivedEmail> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: ReceivedEmailEntity): ReceivedEmailEntity;
    load(this: any, reqmatch?: ReceivedEmailLoadMatch, ctrl?: Control): Promise<ReceivedEmailEntity>;
    list(this: any, reqmatch?: ReceivedEmailListMatch, ctrl?: Control): Promise<ReceivedEmailEntity[]>;
}
export { ReceivedEmailEntity };
