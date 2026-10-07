import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { ContactTopicsResponseSuccess, ContactTopicsResponseSuccessListMatch } from '../ResendSdkTypes';
declare class ContactTopicsResponseSuccessEntity extends ResendSdkEntityBase<ContactTopicsResponseSuccess> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: ContactTopicsResponseSuccessEntity): ContactTopicsResponseSuccessEntity;
    list(this: any, reqmatch?: ContactTopicsResponseSuccessListMatch, ctrl?: Control): Promise<ContactTopicsResponseSuccessEntity[]>;
}
export { ContactTopicsResponseSuccessEntity };
