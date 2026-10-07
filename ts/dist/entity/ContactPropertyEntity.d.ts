import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { ContactProperty, ContactPropertyLoadMatch, ContactPropertyListMatch, ContactPropertyCreateData } from '../ResendSdkTypes';
declare class ContactPropertyEntity extends ResendSdkEntityBase<ContactProperty> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: ContactPropertyEntity): ContactPropertyEntity;
    load(this: any, reqmatch?: ContactPropertyLoadMatch, ctrl?: Control): Promise<ContactPropertyEntity>;
    list(this: any, reqmatch?: ContactPropertyListMatch, ctrl?: Control): Promise<ContactPropertyEntity[]>;
    create(this: any, reqdata?: ContactPropertyCreateData, ctrl?: Control): Promise<ContactPropertyEntity>;
}
export { ContactPropertyEntity };
