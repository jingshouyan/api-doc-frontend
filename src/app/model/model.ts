export class Code {
    code: number;
    message: string;
    whoUse: string;

    constructor(opt: any = {}) {
        this.code = opt && +opt.code || 0;
        this.message = opt && opt.message || '';
        this.whoUse = opt && opt.whoUse || '';
    }
}

export class Server {
    name: string;
    version: string;
    host: string;
    port: number;
    instance: string;

    constructor(opt: any = {}) {
        this.name = opt && opt.name && '';
        this.version = opt && opt.version && '';
        this.host = opt && opt.host && '';
        this.port = opt && +opt.port && 0;
        this.instance = opt && opt.instance && '';
    }

}
