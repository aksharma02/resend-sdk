import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { Topic, TopicLoadMatch } from '../ResendSdkTypes';
declare class TopicEntity extends ResendSdkEntityBase<Topic> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: TopicEntity): TopicEntity;
    load(this: any, reqmatch?: TopicLoadMatch, ctrl?: Control): Promise<TopicEntity>;
}
export { TopicEntity };
