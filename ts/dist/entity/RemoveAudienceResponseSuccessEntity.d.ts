import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { RemoveAudienceResponseSuccess, RemoveAudienceResponseSuccessRemoveMatch } from '../ResendSdkTypes';
declare class RemoveAudienceResponseSuccessEntity extends ResendSdkEntityBase<RemoveAudienceResponseSuccess> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: RemoveAudienceResponseSuccessEntity): RemoveAudienceResponseSuccessEntity;
    remove(this: any, reqmatch?: RemoveAudienceResponseSuccessRemoveMatch, ctrl?: Control): Promise<RemoveAudienceResponseSuccessEntity>;
}
export { RemoveAudienceResponseSuccessEntity };
