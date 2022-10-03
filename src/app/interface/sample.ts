import { ApiInterfaceBuilder } from "./ApiInterfaceBuilder";

export namespace RESTApiNo1{
    export const URL = "xxx"
    
    export interface Request {
        a: string,
        b?: number,
        c: TypeA[]
    }

    export class RequestBuilder implements ApiInterfaceBuilder<RESTApiNo1.Request> {
        a?: string
        b?: number
        c?: TypeA[]

        build(): RESTApiNo1.Request  {
            if(!this.a) throw Error(`a is undefined`);
            if(!this.c) throw Error(`c is undefined`);
            const ret: RESTApiNo1.Request = {
                a: this.a,
                b: this.b,
                c: this.c
            }
            return ret;
        }
    }

    export interface TypeA {
        a1: number,
        a2: number
    }

    export class TypeABuilder implements ApiInterfaceBuilder<RESTApiNo1.TypeA> {
        a1?: number
        a2?: number

        build(): RESTApiNo1.TypeA  {
            if(!this.a1) throw Error(`a1 is undefined`);
            if(!this.a2) throw Error(`a2 is undefined`);
            const ret: RESTApiNo1.TypeA = {
                a1: this.a1,
                a2: this.a2,
            }
            return ret;
        }
    }
    
    export interface Response {
        a: number,
        b: number,
        c?: string,
        d?: string,
        e: TypeB[]
    }

    export class ResponseBuilder implements ApiInterfaceBuilder<RESTApiNo1.Response> {
        a?: number
        b?: number
        c?: string
        d?: string
        e?: TypeB[]

        build(): RESTApiNo1.Response  {
            if(!this.a) throw Error(`a is undefined`);
            if(!this.b) throw Error(`b is undefined`);
            if(!this.e) throw Error(`e is undefined`);
            const ret: RESTApiNo1.Response = {
                a: this.a,
                b: this.b,
                c: this.c,
                d: this.d,
                e: this.e
            }
            return ret;
        }
    }

    export interface TypeB {
        b1: number,
        b2?: string
    }

    export class TypeBBuilder implements ApiInterfaceBuilder<RESTApiNo1.TypeA> {
        a1?: number
        a2?: number

        build(): RESTApiNo1.TypeA  {
            if(!this.a1) throw Error(`a1 is undefined`);
            if(!this.a2) throw Error(`a2 is undefined`);
            const ret: RESTApiNo1.TypeA = {
                a1: this.a1,
                a2: this.a2,
            }
            return ret;
        }
    }
}