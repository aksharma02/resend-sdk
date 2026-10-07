import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { RetrievedAttachment, RetrievedAttachmentLoadMatch } from '../ResendSdkTypes';
declare class RetrievedAttachmentEntity extends ResendSdkEntityBase<RetrievedAttachment> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: RetrievedAttachmentEntity): RetrievedAttachmentEntity;
    load(this: any, reqmatch?: RetrievedAttachmentLoadMatch, ctrl?: Control): Promise<RetrievedAttachmentEntity>;
}
export { RetrievedAttachmentEntity };
