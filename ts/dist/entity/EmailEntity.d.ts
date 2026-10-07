import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { Email, EmailLoadMatch, EmailListMatch, EmailCreateData } from '../ResendSdkTypes';
declare class EmailEntity extends ResendSdkEntityBase<Email> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: EmailEntity): EmailEntity;
    load(this: any, reqmatch?: EmailLoadMatch, ctrl?: Control): Promise<EmailEntity>;
    list(this: any, reqmatch?: EmailListMatch, ctrl?: Control): Promise<EmailEntity[]>;
    create(this: any, reqdata?: EmailCreateData, ctrl?: Control): Promise<EmailEntity>;
}
export { EmailEntity };
