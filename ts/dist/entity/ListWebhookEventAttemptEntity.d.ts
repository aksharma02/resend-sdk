import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { ListWebhookEventAttempt, ListWebhookEventAttemptListMatch } from '../ResendSdkTypes';
declare class ListWebhookEventAttemptEntity extends ResendSdkEntityBase<ListWebhookEventAttempt> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: ListWebhookEventAttemptEntity): ListWebhookEventAttemptEntity;
    list(this: any, reqmatch?: ListWebhookEventAttemptListMatch, ctrl?: Control): Promise<ListWebhookEventAttemptEntity[]>;
}
export { ListWebhookEventAttemptEntity };
