import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { UpdateApiKey, UpdateApiKeyUpdateData } from '../ResendSdkTypes';
declare class UpdateApiKeyEntity extends ResendSdkEntityBase<UpdateApiKey> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: UpdateApiKeyEntity): UpdateApiKeyEntity;
    update(this: any, reqdata?: UpdateApiKeyUpdateData, ctrl?: Control): Promise<UpdateApiKeyEntity>;
}
export { UpdateApiKeyEntity };
