export class Code {
    code: number;
    message: string;
    whoUse: string;

    constructor(opt: any = {}) {
        this.code = opt && opt.code || 0;
        this.message = opt && opt.message || '';
        this.whoUse = opt && opt.whoUse || '';
    }
}
