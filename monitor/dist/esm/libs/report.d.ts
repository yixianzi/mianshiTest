import { ReportData, ReportFuctionType, SdkOption } from "src/types/type";
export declare const createReport: (url: string, option: SdkOption) => (data: ReportData | ReportData[]) => void;
export declare const createLazyReportCache: (report: ReportFuctionType, timeout?: number) => (data: ReportData) => void;
