import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { Suppression, SuppressionLoadMatch } from '../ResendSdkTypes';
declare class SuppressionEntity extends ResendSdkEntityBase<Suppression> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: SuppressionEntity): SuppressionEntity;
    load(this: any, reqmatch?: SuppressionLoadMatch, ctrl?: Control): Promise<SuppressionEntity>;
}
export { SuppressionEntity };
