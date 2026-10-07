import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { BatchRemoveSuppressionsResponseSuccess, BatchRemoveSuppressionsResponseSuccessCreateData } from '../ResendSdkTypes';
declare class BatchRemoveSuppressionsResponseSuccessEntity extends ResendSdkEntityBase<BatchRemoveSuppressionsResponseSuccess> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: BatchRemoveSuppressionsResponseSuccessEntity): BatchRemoveSuppressionsResponseSuccessEntity;
    create(this: any, reqdata?: BatchRemoveSuppressionsResponseSuccessCreateData, ctrl?: Control): Promise<BatchRemoveSuppressionsResponseSuccessEntity>;
}
export { BatchRemoveSuppressionsResponseSuccessEntity };
