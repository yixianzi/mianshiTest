export declare function deepCopy(target: any[]): any;
export declare const getPartObject: (origin?: {
    [key: string]: any;
}, partKeys?: string[]) => {
    [key: string]: any;
};
export declare const getRequestInfo: (requestEvent: PromiseRejectionEvent) => {
    requestUrl: any;
    method: any;
    params: any;
    data: any;
} | undefined;
export declare const parseJsonStrOrNot: (str: any) => any;
export declare const getLastUrl: (location: Location) => string;
