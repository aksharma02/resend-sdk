import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { UpdateDomainResponseSuccess, UpdateDomainResponseSuccessUpdateData } from '../ResendSdkTypes';
declare class UpdateDomainResponseSuccessEntity extends ResendSdkEntityBase<UpdateDomainResponseSuccess> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: UpdateDomainResponseSuccessEntity): UpdateDomainResponseSuccessEntity;
    update(this: any, reqdata?: UpdateDomainResponseSuccessUpdateData, ctrl?: Control): Promise<UpdateDomainResponseSuccessEntity>;
}
export { UpdateDomainResponseSuccessEntity };
