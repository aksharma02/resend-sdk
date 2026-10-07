import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { UpdateContactPropertyResponseSuccess, UpdateContactPropertyResponseSuccessUpdateData } from '../ResendSdkTypes';
declare class UpdateContactPropertyResponseSuccessEntity extends ResendSdkEntityBase<UpdateContactPropertyResponseSuccess> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: UpdateContactPropertyResponseSuccessEntity): UpdateContactPropertyResponseSuccessEntity;
    update(this: any, reqdata?: UpdateContactPropertyResponseSuccessUpdateData, ctrl?: Control): Promise<UpdateContactPropertyResponseSuccessEntity>;
}
export { UpdateContactPropertyResponseSuccessEntity };
