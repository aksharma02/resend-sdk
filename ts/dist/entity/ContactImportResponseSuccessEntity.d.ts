import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { ContactImportResponseSuccess, ContactImportResponseSuccessLoadMatch, ContactImportResponseSuccessListMatch, ContactImportResponseSuccessCreateData } from '../ResendSdkTypes';
declare class ContactImportResponseSuccessEntity extends ResendSdkEntityBase<ContactImportResponseSuccess> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: ContactImportResponseSuccessEntity): ContactImportResponseSuccessEntity;
    load(this: any, reqmatch?: ContactImportResponseSuccessLoadMatch, ctrl?: Control): Promise<ContactImportResponseSuccessEntity>;
    list(this: any, reqmatch?: ContactImportResponseSuccessListMatch, ctrl?: Control): Promise<ContactImportResponseSuccessEntity[]>;
    create(this: any, reqdata?: ContactImportResponseSuccessCreateData, ctrl?: Control): Promise<ContactImportResponseSuccessEntity>;
}
export { ContactImportResponseSuccessEntity };
