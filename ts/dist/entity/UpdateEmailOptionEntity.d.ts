import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { UpdateEmailOption, UpdateEmailOptionUpdateData } from '../ResendSdkTypes';
declare class UpdateEmailOptionEntity extends ResendSdkEntityBase<UpdateEmailOption> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: UpdateEmailOptionEntity): UpdateEmailOptionEntity;
    update(this: any, reqdata?: UpdateEmailOptionUpdateData, ctrl?: Control): Promise<UpdateEmailOptionEntity>;
}
export { UpdateEmailOptionEntity };
