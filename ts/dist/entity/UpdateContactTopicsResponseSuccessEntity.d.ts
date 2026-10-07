import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { UpdateContactTopicsResponseSuccess, UpdateContactTopicsResponseSuccessUpdateData } from '../ResendSdkTypes';
declare class UpdateContactTopicsResponseSuccessEntity extends ResendSdkEntityBase<UpdateContactTopicsResponseSuccess> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: UpdateContactTopicsResponseSuccessEntity): UpdateContactTopicsResponseSuccessEntity;
    update(this: any, reqdata?: UpdateContactTopicsResponseSuccessUpdateData, ctrl?: Control): Promise<UpdateContactTopicsResponseSuccessEntity>;
}
export { UpdateContactTopicsResponseSuccessEntity };
