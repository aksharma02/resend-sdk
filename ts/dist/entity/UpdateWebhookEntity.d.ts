import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { UpdateWebhook, UpdateWebhookListMatch, UpdateWebhookCreateData, UpdateWebhookUpdateData } from '../ResendSdkTypes';
declare class UpdateWebhookEntity extends ResendSdkEntityBase<UpdateWebhook> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: UpdateWebhookEntity): UpdateWebhookEntity;
    list(this: any, reqmatch?: UpdateWebhookListMatch, ctrl?: Control): Promise<UpdateWebhookEntity[]>;
    create(this: any, reqdata?: UpdateWebhookCreateData, ctrl?: Control): Promise<UpdateWebhookEntity>;
    update(this: any, reqdata?: UpdateWebhookUpdateData, ctrl?: Control): Promise<UpdateWebhookEntity>;
}
export { UpdateWebhookEntity };
