export interface SdkOption {
    productId: string;
    userInfo: string;
    platform: 'vue' | 'jsp';
    routeType?: 'hash' | 'history';
}
export type ReportType = 'view' | 'error' | 'performance' | 'click' | 'duration';
export type ReportFuctionType = (data: ReportData | ReportData[]) => void;
export interface ReportData {
    type: ReportType;
    data?: {
        lastUrl: string;
        timestamp: number;
        platform: 'jsp' | 'vue';
        logExtra?: {
            [propname: string]: any;
        };
    };
}
export declare const ErrorType: {
    js: {
        label: string;
        value: string;
    };
    async: {
        label: string;
        value: string;
    };
    res: {
        label: string;
        value: string;
    };
    promise: {
        label: string;
        value: string;
    };
    request: {
        label: string;
        value: string;
    };
};
export interface ErrorData {
    msg: string;
    pageUrl: string;
    type: string | string[];
    time: string | number;
    agent: object;
    extra?: any;
}
