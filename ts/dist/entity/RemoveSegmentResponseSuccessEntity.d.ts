import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { RemoveSegmentResponseSuccess, RemoveSegmentResponseSuccessListMatch, RemoveSegmentResponseSuccessCreateData, RemoveSegmentResponseSuccessRemoveMatch } from '../ResendSdkTypes';
declare class RemoveSegmentResponseSuccessEntity extends ResendSdkEntityBase<RemoveSegmentResponseSuccess> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: RemoveSegmentResponseSuccessEntity): RemoveSegmentResponseSuccessEntity;
    list(this: any, reqmatch?: RemoveSegmentResponseSuccessListMatch, ctrl?: Control): Promise<RemoveSegmentResponseSuccessEntity[]>;
    create(this: any, reqdata?: RemoveSegmentResponseSuccessCreateData, ctrl?: Control): Promise<RemoveSegmentResponseSuccessEntity>;
    remove(this: any, reqmatch?: RemoveSegmentResponseSuccessRemoveMatch, ctrl?: Control): Promise<RemoveSegmentResponseSuccessEntity>;
}
export { RemoveSegmentResponseSuccessEntity };
