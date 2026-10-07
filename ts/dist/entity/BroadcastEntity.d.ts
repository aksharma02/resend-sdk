import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { Broadcast, BroadcastLoadMatch, BroadcastListMatch, BroadcastCreateData } from '../ResendSdkTypes';
declare class BroadcastEntity extends ResendSdkEntityBase<Broadcast> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: BroadcastEntity): BroadcastEntity;
    load(this: any, reqmatch?: BroadcastLoadMatch, ctrl?: Control): Promise<BroadcastEntity>;
    list(this: any, reqmatch?: BroadcastListMatch, ctrl?: Control): Promise<BroadcastEntity[]>;
    create(this: any, reqdata?: BroadcastCreateData, ctrl?: Control): Promise<BroadcastEntity>;
}
export { BroadcastEntity };
