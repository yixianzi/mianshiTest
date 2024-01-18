import { clearCache, getCache } from "./cache";
import { getLastUrl } from "./util";
export var sendPageViewJsp = function sendPageViewJsp(reportFuc, platform) {
  reportFuc({
    type: 'view',
    data: {
      timestamp: new Date().getTime(),
      lastUrl: getLastUrl(location),
      platform: platform
    }
  });
};
export var sendPageViewVue = function sendPageViewVue(reportFuc) {
  var routeType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'hash';
} // 初始化先发--使用afterEach，不需要先发了
// reportFuc({
//   type: 'view',
//   data: {
//     lastUrl: location.href
//   }
// })
;

export var pageAccessDuration = function pageAccessDuration(reportFuc) {
  var platform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'vue';
  if (platform === 'jsp') {
    var timeStart = 0,
      timeEnd = 0,
      time = 0,
      timeSpent = 0;
    var pageLoadTime = function pageLoadTime() {
      timeEnd = new Date().getTime();
      timeSpent = timeEnd - timeStart;
      reportFuc({
        type: "duration",
        data: {
          platform: platform,
          lastUrl: getLastUrl(location),
          timestamp: new Date().getTime(),
          logExtra: {
            timeSpent: timeSpent
          }
        }
      });
      // 把时间展示在控制台上
      console.log('你停留在此页面的时间是：' + timeSpent + '毫秒');
    };
    window.onload = function () {
      timeStart = new Date().getTime();
    };
    window.onbeforeunload = pageLoadTime;
  }
  if (platform === 'vue') {
    var nowDate = new Date().getTime();
    window.addEventListener('beforeunload', function () {
      var lastDate = new Date().getTime();
      var time = lastDate - nowDate;
      reportFuc({
        type: "duration",
        data: {
          platform: platform,
          lastUrl: getLastUrl(location),
          timestamp: new Date().getTime(),
          logExtra: {
            timeSpent: time
          }
        }
      });
      // 处理一下缓存的请求
      var data = getCache();
      if (data.length > 0) {
        reportFuc(data);
        clearCache();
      }
    });
  }
};