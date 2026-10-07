import { Context } from './Context';
declare class ResendSdkError extends Error {
    isResendSdkError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { ResendSdkError };
