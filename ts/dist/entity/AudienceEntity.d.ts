import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { Audience, AudienceLoadMatch, AudienceListMatch, AudienceCreateData } from '../ResendSdkTypes';
declare class AudienceEntity extends ResendSdkEntityBase<Audience> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: AudienceEntity): AudienceEntity;
    load(this: any, reqmatch?: AudienceLoadMatch, ctrl?: Control): Promise<AudienceEntity>;
    list(this: any, reqmatch?: AudienceListMatch, ctrl?: Control): Promise<AudienceEntity[]>;
    create(this: any, reqdata?: AudienceCreateData, ctrl?: Control): Promise<AudienceEntity>;
}
export { AudienceEntity };
