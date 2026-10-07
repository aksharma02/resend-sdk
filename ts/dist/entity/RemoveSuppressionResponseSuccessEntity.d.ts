import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { RemoveSuppressionResponseSuccess, RemoveSuppressionResponseSuccessListMatch, RemoveSuppressionResponseSuccessCreateData, RemoveSuppressionResponseSuccessRemoveMatch } from '../ResendSdkTypes';
declare class RemoveSuppressionResponseSuccessEntity extends ResendSdkEntityBase<RemoveSuppressionResponseSuccess> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: RemoveSuppressionResponseSuccessEntity): RemoveSuppressionResponseSuccessEntity;
    list(this: any, reqmatch?: RemoveSuppressionResponseSuccessListMatch, ctrl?: Control): Promise<RemoveSuppressionResponseSuccessEntity[]>;
    create(this: any, reqdata?: RemoveSuppressionResponseSuccessCreateData, ctrl?: Control): Promise<RemoveSuppressionResponseSuccessEntity>;
    remove(this: any, reqmatch?: RemoveSuppressionResponseSuccessRemoveMatch, ctrl?: Control): Promise<RemoveSuppressionResponseSuccessEntity>;
}
export { RemoveSuppressionResponseSuccessEntity };
