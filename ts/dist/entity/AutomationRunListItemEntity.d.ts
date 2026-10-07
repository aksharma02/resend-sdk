import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { AutomationRunListItem, AutomationRunListItemListMatch } from '../ResendSdkTypes';
declare class AutomationRunListItemEntity extends ResendSdkEntityBase<AutomationRunListItem> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: AutomationRunListItemEntity): AutomationRunListItemEntity;
    list(this: any, reqmatch?: AutomationRunListItemListMatch, ctrl?: Control): Promise<AutomationRunListItemEntity[]>;
}
export { AutomationRunListItemEntity };
