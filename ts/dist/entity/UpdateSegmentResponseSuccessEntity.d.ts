import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { UpdateSegmentResponseSuccess, UpdateSegmentResponseSuccessUpdateData } from '../ResendSdkTypes';
declare class UpdateSegmentResponseSuccessEntity extends ResendSdkEntityBase<UpdateSegmentResponseSuccess> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: UpdateSegmentResponseSuccessEntity): UpdateSegmentResponseSuccessEntity;
    update(this: any, reqdata?: UpdateSegmentResponseSuccessUpdateData, ctrl?: Control): Promise<UpdateSegmentResponseSuccessEntity>;
}
export { UpdateSegmentResponseSuccessEntity };
