import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { UpdateTemplateResponseSuccess, UpdateTemplateResponseSuccessUpdateData } from '../ResendSdkTypes';
declare class UpdateTemplateResponseSuccessEntity extends ResendSdkEntityBase<UpdateTemplateResponseSuccess> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: UpdateTemplateResponseSuccessEntity): UpdateTemplateResponseSuccessEntity;
    update(this: any, reqdata?: UpdateTemplateResponseSuccessUpdateData, ctrl?: Control): Promise<UpdateTemplateResponseSuccessEntity>;
}
export { UpdateTemplateResponseSuccessEntity };
