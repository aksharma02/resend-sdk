import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { ListBroadcastClickedLinksResponseSuccess, ListBroadcastClickedLinksResponseSuccessListMatch } from '../ResendSdkTypes';
declare class ListBroadcastClickedLinksResponseSuccessEntity extends ResendSdkEntityBase<ListBroadcastClickedLinksResponseSuccess> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: ListBroadcastClickedLinksResponseSuccessEntity): ListBroadcastClickedLinksResponseSuccessEntity;
    list(this: any, reqmatch?: ListBroadcastClickedLinksResponseSuccessListMatch, ctrl?: Control): Promise<ListBroadcastClickedLinksResponseSuccessEntity[]>;
}
export { ListBroadcastClickedLinksResponseSuccessEntity };
