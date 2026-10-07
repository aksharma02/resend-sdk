import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { ListBroadcastRecipientsResponseSuccess, ListBroadcastRecipientsResponseSuccessListMatch } from '../ResendSdkTypes';
declare class ListBroadcastRecipientsResponseSuccessEntity extends ResendSdkEntityBase<ListBroadcastRecipientsResponseSuccess> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: ListBroadcastRecipientsResponseSuccessEntity): ListBroadcastRecipientsResponseSuccessEntity;
    list(this: any, reqmatch?: ListBroadcastRecipientsResponseSuccessListMatch, ctrl?: Control): Promise<ListBroadcastRecipientsResponseSuccessEntity[]>;
}
export { ListBroadcastRecipientsResponseSuccessEntity };
