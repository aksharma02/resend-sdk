import { ResendSdkEntityBase } from '../ResendSdkEntityBase';
import type { ResendSdkSDK } from '../ResendSdkSDK';
import type { Control } from '../types';
import type { Domain, DomainLoadMatch, DomainListMatch, DomainCreateData, DomainRemoveMatch } from '../ResendSdkTypes';
declare class DomainEntity extends ResendSdkEntityBase<Domain> {
    constructor(client: ResendSdkSDK, entopts: any);
    make(this: DomainEntity): DomainEntity;
    load(this: any, reqmatch?: DomainLoadMatch, ctrl?: Control): Promise<DomainEntity>;
    list(this: any, reqmatch?: DomainListMatch, ctrl?: Control): Promise<DomainEntity[]>;
    create(this: any, reqdata?: DomainCreateData, ctrl?: Control): Promise<DomainEntity>;
    remove(this: any, reqmatch?: DomainRemoveMatch, ctrl?: Control): Promise<DomainEntity>;
}
export { DomainEntity };
