import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { WebhookEvent, WebhookEventLoadMatch, WebhookEventCreateData } from '../ResendSdkTypes';
declare class WebhookEventEntity extends ResendSdkEntityBase<WebhookEvent> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: WebhookEventEntity): WebhookEventEntity;
    load(this: any, reqmatch?: WebhookEventLoadMatch, ctrl?: Control): Promise<WebhookEventEntity>;
    create(this: any, reqdata?: WebhookEventCreateData, ctrl?: Control): Promise<WebhookEventEntity>;
}
export { WebhookEventEntity };
