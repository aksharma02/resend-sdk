import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { RemoveBroadcastResponseSuccess, RemoveBroadcastResponseSuccessRemoveMatch } from '../ResendSdkTypes';
declare class RemoveBroadcastResponseSuccessEntity extends ResendSdkEntityBase<RemoveBroadcastResponseSuccess> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: RemoveBroadcastResponseSuccessEntity): RemoveBroadcastResponseSuccessEntity;
    remove(this: any, reqmatch?: RemoveBroadcastResponseSuccessRemoveMatch, ctrl?: Control): Promise<RemoveBroadcastResponseSuccessEntity>;
}
export { RemoveBroadcastResponseSuccessEntity };
