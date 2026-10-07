import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { ListWebhookEvent, ListWebhookEventListMatch } from '../ResendSdkTypes';
declare class ListWebhookEventEntity extends ResendSdkEntityBase<ListWebhookEvent> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: ListWebhookEventEntity): ListWebhookEventEntity;
    list(this: any, reqmatch?: ListWebhookEventListMatch, ctrl?: Control): Promise<ListWebhookEventEntity[]>;
}
export { ListWebhookEventEntity };
