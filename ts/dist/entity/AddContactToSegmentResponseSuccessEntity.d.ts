import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { AddContactToSegmentResponseSuccess, AddContactToSegmentResponseSuccessCreateData } from '../ResendSdkTypes';
declare class AddContactToSegmentResponseSuccessEntity extends ResendSdkEntityBase<AddContactToSegmentResponseSuccess> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: AddContactToSegmentResponseSuccessEntity): AddContactToSegmentResponseSuccessEntity;
    create(this: any, reqdata?: AddContactToSegmentResponseSuccessCreateData, ctrl?: Control): Promise<AddContactToSegmentResponseSuccessEntity>;
}
export { AddContactToSegmentResponseSuccessEntity };
