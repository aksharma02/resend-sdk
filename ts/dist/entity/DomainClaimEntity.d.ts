import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { DomainClaim, DomainClaimLoadMatch, DomainClaimCreateData } from '../ResendSdkTypes';
declare class DomainClaimEntity extends ResendSdkEntityBase<DomainClaim> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: DomainClaimEntity): DomainClaimEntity;
    load(this: any, reqmatch?: DomainClaimLoadMatch, ctrl?: Control): Promise<DomainClaimEntity>;
    create(this: any, reqdata?: DomainClaimCreateData, ctrl?: Control): Promise<DomainClaimEntity>;
}
export { DomainClaimEntity };
