import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { ListAttachment, ListAttachmentListMatch } from '../ResendSdkTypes';
declare class ListAttachmentEntity extends ResendSdkEntityBase<ListAttachment> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: ListAttachmentEntity): ListAttachmentEntity;
    list(this: any, reqmatch?: ListAttachmentListMatch, ctrl?: Control): Promise<ListAttachmentEntity[]>;
}
export { ListAttachmentEntity };
