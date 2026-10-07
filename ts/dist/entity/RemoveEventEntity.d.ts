import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { RemoveEvent, RemoveEventRemoveMatch } from '../ResendSdkTypes';
declare class RemoveEventEntity extends ResendSdkEntityBase<RemoveEvent> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: RemoveEventEntity): RemoveEventEntity;
    remove(this: any, reqmatch?: RemoveEventRemoveMatch, ctrl?: Control): Promise<RemoveEventEntity>;
}
export { RemoveEventEntity };
