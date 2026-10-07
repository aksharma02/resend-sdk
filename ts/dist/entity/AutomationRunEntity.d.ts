import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { AutomationRun, AutomationRunLoadMatch } from '../ResendSdkTypes';
declare class AutomationRunEntity extends ResendSdkEntityBase<AutomationRun> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: AutomationRunEntity): AutomationRunEntity;
    load(this: any, reqmatch?: AutomationRunLoadMatch, ctrl?: Control): Promise<AutomationRunEntity>;
}
export { AutomationRunEntity };
