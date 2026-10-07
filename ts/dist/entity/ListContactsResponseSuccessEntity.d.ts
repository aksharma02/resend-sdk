import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { ListContactsResponseSuccess, ListContactsResponseSuccessListMatch } from '../ResendSdkTypes';
declare class ListContactsResponseSuccessEntity extends ResendSdkEntityBase<ListContactsResponseSuccess> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: ListContactsResponseSuccessEntity): ListContactsResponseSuccessEntity;
    list(this: any, reqmatch?: ListContactsResponseSuccessListMatch, ctrl?: Control): Promise<ListContactsResponseSuccessEntity[]>;
}
export { ListContactsResponseSuccessEntity };
