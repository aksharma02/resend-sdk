import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { ListContactSegmentsResponseSuccess, ListContactSegmentsResponseSuccessListMatch } from '../ResendSdkTypes';
declare class ListContactSegmentsResponseSuccessEntity extends ResendSdkEntityBase<ListContactSegmentsResponseSuccess> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: ListContactSegmentsResponseSuccessEntity): ListContactSegmentsResponseSuccessEntity;
    list(this: any, reqmatch?: ListContactSegmentsResponseSuccessListMatch, ctrl?: Control): Promise<ListContactSegmentsResponseSuccessEntity[]>;
}
export { ListContactSegmentsResponseSuccessEntity };
