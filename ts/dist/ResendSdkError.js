"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResendSdkError = void 0;
class ResendSdkError extends Error {
    isResendSdkError = true;
    sdk = 'ResendSdk';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.ResendSdkError = ResendSdkError;
//# sourceMappingURL=ResendSdkError.js.map