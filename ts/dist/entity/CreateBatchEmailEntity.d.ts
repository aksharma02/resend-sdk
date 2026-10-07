import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { CreateBatchEmail, CreateBatchEmailCreateData } from '../ResendSdkTypes';
declare class CreateBatchEmailEntity extends ResendSdkEntityBase<CreateBatchEmail> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: CreateBatchEmailEntity): CreateBatchEmailEntity;
    create(this: any, reqdata?: CreateBatchEmailCreateData, ctrl?: Control): Promise<CreateBatchEmailEntity>;
}
export { CreateBatchEmailEntity };
