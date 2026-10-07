import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { RemoveContactPropertyResponseSuccess, RemoveContactPropertyResponseSuccessRemoveMatch } from '../ResendSdkTypes';
declare class RemoveContactPropertyResponseSuccessEntity extends ResendSdkEntityBase<RemoveContactPropertyResponseSuccess> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: RemoveContactPropertyResponseSuccessEntity): RemoveContactPropertyResponseSuccessEntity;
    remove(this: any, reqmatch?: RemoveContactPropertyResponseSuccessRemoveMatch, ctrl?: Control): Promise<RemoveContactPropertyResponseSuccessEntity>;
}
export { RemoveContactPropertyResponseSuccessEntity };
