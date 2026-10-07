import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { RemoveTopicResponseSuccess, RemoveTopicResponseSuccessListMatch, RemoveTopicResponseSuccessCreateData, RemoveTopicResponseSuccessRemoveMatch } from '../ResendSdkTypes';
declare class RemoveTopicResponseSuccessEntity extends ResendSdkEntityBase<RemoveTopicResponseSuccess> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: RemoveTopicResponseSuccessEntity): RemoveTopicResponseSuccessEntity;
    list(this: any, reqmatch?: RemoveTopicResponseSuccessListMatch, ctrl?: Control): Promise<RemoveTopicResponseSuccessEntity[]>;
    create(this: any, reqdata?: RemoveTopicResponseSuccessCreateData, ctrl?: Control): Promise<RemoveTopicResponseSuccessEntity>;
    remove(this: any, reqmatch?: RemoveTopicResponseSuccessRemoveMatch, ctrl?: Control): Promise<RemoveTopicResponseSuccessEntity>;
}
export { RemoveTopicResponseSuccessEntity };
