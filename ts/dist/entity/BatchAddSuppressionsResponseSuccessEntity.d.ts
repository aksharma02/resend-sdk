import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { BatchAddSuppressionsResponseSuccess, BatchAddSuppressionsResponseSuccessCreateData } from '../ResendSdkTypes';
declare class BatchAddSuppressionsResponseSuccessEntity extends ResendSdkEntityBase<BatchAddSuppressionsResponseSuccess> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: BatchAddSuppressionsResponseSuccessEntity): BatchAddSuppressionsResponseSuccessEntity;
    create(this: any, reqdata?: BatchAddSuppressionsResponseSuccessCreateData, ctrl?: Control): Promise<BatchAddSuppressionsResponseSuccessEntity>;
}
export { BatchAddSuppressionsResponseSuccessEntity };
