import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { RemoveTemplateResponseSuccess, RemoveTemplateResponseSuccessListMatch, RemoveTemplateResponseSuccessCreateData, RemoveTemplateResponseSuccessRemoveMatch } from '../ResendSdkTypes';
declare class RemoveTemplateResponseSuccessEntity extends ResendSdkEntityBase<RemoveTemplateResponseSuccess> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: RemoveTemplateResponseSuccessEntity): RemoveTemplateResponseSuccessEntity;
    list(this: any, reqmatch?: RemoveTemplateResponseSuccessListMatch, ctrl?: Control): Promise<RemoveTemplateResponseSuccessEntity[]>;
    create(this: any, reqdata?: RemoveTemplateResponseSuccessCreateData, ctrl?: Control): Promise<RemoveTemplateResponseSuccessEntity>;
    remove(this: any, reqmatch?: RemoveTemplateResponseSuccessRemoveMatch, ctrl?: Control): Promise<RemoveTemplateResponseSuccessEntity>;
}
export { RemoveTemplateResponseSuccessEntity };
