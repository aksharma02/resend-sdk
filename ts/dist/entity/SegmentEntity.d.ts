import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { Segment, SegmentLoadMatch } from '../ResendSdkTypes';
declare class SegmentEntity extends ResendSdkEntityBase<Segment> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: SegmentEntity): SegmentEntity;
    load(this: any, reqmatch?: SegmentLoadMatch, ctrl?: Control): Promise<SegmentEntity>;
}
export { SegmentEntity };
