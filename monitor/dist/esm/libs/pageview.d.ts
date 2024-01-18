import { ReportData, ReportFuctionType } from "src/types/type";
export declare const sendPageViewJsp: (reportFuc: (data: ReportData) => void, platform: 'jsp' | 'vue') => void;
export declare const sendPageViewVue: (reportFuc: (data: ReportData) => void, routeType?: 'hash' | 'history') => void;
export declare const pageAccessDuration: (reportFuc: ReportFuctionType, platform?: 'jsp' | 'vue') => void;
