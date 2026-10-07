import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { Template, TemplateLoadMatch, TemplateCreateData } from '../ResendSdkTypes';
declare class TemplateEntity extends ResendSdkEntityBase<Template> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: TemplateEntity): TemplateEntity;
    load(this: any, reqmatch?: TemplateLoadMatch, ctrl?: Control): Promise<TemplateEntity>;
    create(this: any, reqdata?: TemplateCreateData, ctrl?: Control): Promise<TemplateEntity>;
}
export { TemplateEntity };
