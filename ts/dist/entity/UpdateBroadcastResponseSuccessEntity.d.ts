import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { UpdateBroadcastResponseSuccess, UpdateBroadcastResponseSuccessUpdateData } from '../ResendSdkTypes';
declare class UpdateBroadcastResponseSuccessEntity extends ResendSdkEntityBase<UpdateBroadcastResponseSuccess> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: UpdateBroadcastResponseSuccessEntity): UpdateBroadcastResponseSuccessEntity;
    update(this: any, reqdata?: UpdateBroadcastResponseSuccessUpdateData, ctrl?: Control): Promise<UpdateBroadcastResponseSuccessEntity>;
}
export { UpdateBroadcastResponseSuccessEntity };
