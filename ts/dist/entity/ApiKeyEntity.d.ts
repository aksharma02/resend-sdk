import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { ApiKey, ApiKeyListMatch, ApiKeyCreateData, ApiKeyRemoveMatch } from '../ResendSdkTypes';
declare class ApiKeyEntity extends ResendSdkEntityBase<ApiKey> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: ApiKeyEntity): ApiKeyEntity;
    list(this: any, reqmatch?: ApiKeyListMatch, ctrl?: Control): Promise<ApiKeyEntity[]>;
    create(this: any, reqdata?: ApiKeyCreateData, ctrl?: Control): Promise<ApiKeyEntity>;
    remove(this: any, reqmatch?: ApiKeyRemoveMatch, ctrl?: Control): Promise<ApiKeyEntity>;
}
export { ApiKeyEntity };
