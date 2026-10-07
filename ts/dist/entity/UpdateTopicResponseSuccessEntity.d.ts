import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { UpdateTopicResponseSuccess, UpdateTopicResponseSuccessUpdateData } from '../ResendSdkTypes';
declare class UpdateTopicResponseSuccessEntity extends ResendSdkEntityBase<UpdateTopicResponseSuccess> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: UpdateTopicResponseSuccessEntity): UpdateTopicResponseSuccessEntity;
    update(this: any, reqdata?: UpdateTopicResponseSuccessUpdateData, ctrl?: Control): Promise<UpdateTopicResponseSuccessEntity>;
}
export { UpdateTopicResponseSuccessEntity };
