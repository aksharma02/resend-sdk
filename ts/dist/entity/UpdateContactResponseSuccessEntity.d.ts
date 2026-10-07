import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { UpdateContactResponseSuccess, UpdateContactResponseSuccessUpdateData } from '../ResendSdkTypes';
declare class UpdateContactResponseSuccessEntity extends ResendSdkEntityBase<UpdateContactResponseSuccess> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: UpdateContactResponseSuccessEntity): UpdateContactResponseSuccessEntity;
    update(this: any, reqdata?: UpdateContactResponseSuccessUpdateData, ctrl?: Control): Promise<UpdateContactResponseSuccessEntity>;
}
export { UpdateContactResponseSuccessEntity };
