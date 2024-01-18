import { addCache, clearCache, getCache } from "./cache";
export var createReport = function createReport(url, option) {
  return function (data) {
    var reporterData = JSON.stringify({
      data: Array.isArray(data) ? data : [data],
      // 最后上传的是一个ReportData list
      platform: option.platform,
      productId: option.productId,
      userInfo: option.userInfo
    });
    // const formData = new FormData();
    // formData.append("data", reporterData);
    var blob = new Blob([reporterData], {
      type: "application/json; charset=UTF-8"
    });
    if (!window.navigator.sendBeacon) {
      var xhr = new XMLHttpRequest();
      xhr.open("post", url);
      xhr.send(reporterData);
    } else {
      window.requestIdleCallback ? window.requestIdleCallback(function () {
        navigator.sendBeacon(url, blob);
      }) : setTimeout(function () {
        navigator.sendBeacon(url, blob);
      });
    }
  };
};
export var createLazyReportCache = function createLazyReportCache(report) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;
  var timer = null;
  return function (data) {
    addCache(data);
    console.log(getCache());
    if (timer) {
      clearTimeout(timer);
    }
    timer = window.setTimeout(function () {
      var data = getCache();
      if (data.length > 0) {
        report(data);
        clearCache();
      }
    }, timeout);
  };
};