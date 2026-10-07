import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { RemoveContactResponseSuccess, RemoveContactResponseSuccessRemoveMatch } from '../ResendSdkTypes';
declare class RemoveContactResponseSuccessEntity extends ResendSdkEntityBase<RemoveContactResponseSuccess> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: RemoveContactResponseSuccessEntity): RemoveContactResponseSuccessEntity;
    remove(this: any, reqmatch?: RemoveContactResponseSuccessRemoveMatch, ctrl?: Control): Promise<RemoveContactResponseSuccessEntity>;
}
export { RemoveContactResponseSuccessEntity };
