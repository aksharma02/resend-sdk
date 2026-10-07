import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { RemoveContactFromSegmentResponseSuccess, RemoveContactFromSegmentResponseSuccessRemoveMatch } from '../ResendSdkTypes';
declare class RemoveContactFromSegmentResponseSuccessEntity extends ResendSdkEntityBase<RemoveContactFromSegmentResponseSuccess> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: RemoveContactFromSegmentResponseSuccessEntity): RemoveContactFromSegmentResponseSuccessEntity;
    remove(this: any, reqmatch?: RemoveContactFromSegmentResponseSuccessRemoveMatch, ctrl?: Control): Promise<RemoveContactFromSegmentResponseSuccessEntity>;
}
export { RemoveContactFromSegmentResponseSuccessEntity };
