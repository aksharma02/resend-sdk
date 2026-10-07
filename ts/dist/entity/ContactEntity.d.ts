import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { Contact, ContactLoadMatch, ContactListMatch, ContactCreateData } from '../ResendSdkTypes';
declare class ContactEntity extends ResendSdkEntityBase<Contact> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: ContactEntity): ContactEntity;
    load(this: any, reqmatch?: ContactLoadMatch, ctrl?: Control): Promise<ContactEntity>;
    list(this: any, reqmatch?: ContactListMatch, ctrl?: Control): Promise<ContactEntity[]>;
    create(this: any, reqdata?: ContactCreateData, ctrl?: Control): Promise<ContactEntity>;
}
export { ContactEntity };
