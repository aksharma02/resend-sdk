import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { RevokeOAuthGrant, RevokeOAuthGrantListMatch, RevokeOAuthGrantRemoveMatch } from '../ResendSdkTypes';
declare class RevokeOAuthGrantEntity extends ResendSdkEntityBase<RevokeOAuthGrant> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: RevokeOAuthGrantEntity): RevokeOAuthGrantEntity;
    list(this: any, reqmatch?: RevokeOAuthGrantListMatch, ctrl?: Control): Promise<RevokeOAuthGrantEntity[]>;
    remove(this: any, reqmatch?: RevokeOAuthGrantRemoveMatch, ctrl?: Control): Promise<RevokeOAuthGrantEntity>;
}
export { RevokeOAuthGrantEntity };
