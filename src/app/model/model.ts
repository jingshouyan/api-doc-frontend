import * as _ from 'underscore';

export class CodeInfo {
    code: number;
    message: string;
    whoUse: string;

    constructor(opt: any = {}) {
        this.code = opt && +opt.code || 0;
        this.message = opt && opt.message || '';
        this.whoUse = opt && opt.whoUse || '';
    }
}

export class ServerInfo {
    name: string;
    version: string;
    host: string;
    port: number;
    instance: string;

    constructor(opt: any = {}) {
        this.name = opt && opt.name || '';
        this.version = opt && opt.version || '';
        this.host = opt && opt.host || '';
        this.port = opt && +opt.port || 0;
        this.instance = opt && opt.instance || '';
    }
}

export class FieldInfo {
    name: string;
    type: string;
    remark: string;
    annotations: string[];

    constructor(opt: any = {}) {
        this.name = opt && opt.name || '';
        this.type = opt && opt.type || '';
        this.remark = opt && opt.remark || '';
        this.annotations = opt && opt.annotations || [];
    }
}

export class TypeInfo {
    type: string;
    remark: string;
    fields: FieldInfo[];
    annotations: string[];

    constructor(opt: any = {}) {
        this.type = opt && opt.type || '';
        this.remark = opt && opt.remark || '';
        this.annotations = opt && opt.annotations || [];
        this.fields = opt
            && _.map(opt.fields, (f: any) => new FieldInfo(f))
            || [];
    }
}

export class BeanInfo {
    rootType: string;
    types: TypeInfo[];

    constructor(opt: any = {}) {
        this.rootType = opt && opt.rootType || '';
        this.types = opt
            && _.map(opt.types, (t: any) => new TypeInfo(t))
            || [];
    }
}

export class MethodInfo {
    name: string;
    remark: string;
    input: BeanInfo;
    output: BeanInfo;

    constructor(opt: any) {
        this.name = opt && opt.name || '';
        this.remark = opt && opt.remark || '';
        this.input = opt && opt.input && new BeanInfo(opt.input);
        this.output = opt && opt.output && new BeanInfo(opt.output);
    }
}

export class InterfaceInfo {
    serverInfo: ServerInfo;
    methodInfos: MethodInfo[];
    codeInfos: CodeInfo[];

    constructor(opt: any = {}) {

        this.serverInfo = opt && opt.serverInfo && new ServerInfo(opt.serverInfo);
        this.methodInfos = opt
            && _.map(opt.methodInfos, (m: any) => new MethodInfo(m))
            || [];
        this.codeInfos = opt
            && _.map(opt.codeInfos, (c: any) => new CodeInfo(c))
            || [];
        console.log(opt, this);
    }
}

export class Rsp {
    code: number;
    message: string;
    data: any;

    constructor(opt: any = {}) {
        this.code = opt && opt.code || 0;
        this.message = opt && opt.message || '';
        this.data = opt && opt.data;
    }
}
