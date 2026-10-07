import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { EmailsMetric, EmailsMetricListMatch } from '../ResendSdkTypes';
declare class EmailsMetricEntity extends ResendSdkEntityBase<EmailsMetric> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: EmailsMetricEntity): EmailsMetricEntity;
    list(this: any, reqmatch?: EmailsMetricListMatch, ctrl?: Control): Promise<EmailsMetricEntity[]>;
}
export { EmailsMetricEntity };
