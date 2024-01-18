import { ReportData, ReportFuctionType, SdkOption } from "./types/type";
export declare class SafeMonitorSDK {
    private url;
    private option;
    report: ReportFuctionType;
    lazyReportCache: (data: ReportData) => void;
    duration: any;
    constructor(url: string, option: SdkOption);
    reportClick(logExtra: {
        [propname: string]: any;
    }): void;
    init(): void;
    initErrorMonitor(): void;
    initPerformanceMonitor(): void;
}
