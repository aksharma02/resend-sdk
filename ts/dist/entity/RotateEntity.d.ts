import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { Rotate, RotateCreateData } from '../ResendSdkTypes';
declare class RotateEntity extends ResendSdkEntityBase<Rotate> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: RotateEntity): RotateEntity;
    create(this: any, reqdata?: RotateCreateData, ctrl?: Control): Promise<RotateEntity>;
}
export { RotateEntity };
