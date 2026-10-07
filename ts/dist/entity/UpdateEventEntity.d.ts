import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { UpdateEvent, UpdateEventUpdateData } from '../ResendSdkTypes';
declare class UpdateEventEntity extends ResendSdkEntityBase<UpdateEvent> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: UpdateEventEntity): UpdateEventEntity;
    update(this: any, reqdata?: UpdateEventUpdateData, ctrl?: Control): Promise<UpdateEventEntity>;
}
export { UpdateEventEntity };
