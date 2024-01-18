function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { pageAccessDuration, sendPageViewJsp, sendPageViewVue } from "./libs/pageview";
import { createLazyReportCache, createReport } from "./libs/report";
import { getPartObject, getRequestInfo, parseJsonStrOrNot, getLastUrl } from "./libs/util";
import { ErrorType } from "./types/type";
export var SafeMonitorSDK = /*#__PURE__*/function () {
  function SafeMonitorSDK(url, option) {
    _classCallCheck(this, SafeMonitorSDK);
    _defineProperty(this, "url", void 0);
    _defineProperty(this, "option", void 0);
    _defineProperty(this, "report", void 0);
    _defineProperty(this, "lazyReportCache", void 0);
    _defineProperty(this, "duration", void 0);
    this.url = url;
    this.option = option;
    this.report = createReport(url, option);
    this.lazyReportCache = createLazyReportCache(this.report, 3000);
    pageAccessDuration(this.report, option.platform);
  }
  _createClass(SafeMonitorSDK, [{
    key: "reportClick",
    value: function reportClick(logExtra) {
      var type = "click";
      var platform = this.option.platform;
      var reportData = {
        type: type,
        data: {
          lastUrl: getLastUrl(location),
          timestamp: new Date().getTime(),
          platform: platform,
          logExtra: logExtra
        }
      };
      this.report(reportData);
    }
  }, {
    key: "init",
    value: function init() {
      if (this.option.platform === "jsp") {
        sendPageViewJsp(this.report, this.option.platform);
      } else if (this.option.platform === "vue") {
        sendPageViewVue(this.report, this.option.routeType);
      }
      this.initErrorMonitor();
      this.initPerformanceMonitor();
    }
  }, {
    key: "initErrorMonitor",
    value: function initErrorMonitor() {
      var _this = this;
      // 1.常规报错(vue不行)，异步报错
      window.onerror = function (msg, _url, line, col, _err) {
        var platform = _this.option.platform;
        var result = {
          type: "error",
          data: {
            lastUrl: getLastUrl(location),
            timestamp: Date.now(),
            platform: platform,
            logExtra: {
              msg: String(msg),
              pageUrl: getLastUrl(location),
              type: [ErrorType.js.value, ErrorType.async.value],
              time: Date.now(),
              agent: getPartObject(navigator, ["appVersion"]),
              // 上传浏览器版本
              extra: {
                line: line,
                col: col
              }
            }
          }
        };
        console.info("【Monitor-SDK】window.onerror", result);
        _this.report(result);
      };

      // 2.Promise报错，包含【接口报错】，【接口超时】与【自定义promise报错】
      window.onunhandledrejection = function (event) {
        var platform = _this.option.platform;
        var result = {
          type: "error",
          data: {
            platform: platform,
            lastUrl: getLastUrl(location),
            timestamp: Date.now(),
            logExtra: {
              msg: String(event.reason),
              pageUrl: getLastUrl(location),
              type: [ErrorType.promise.value, ErrorType.request.value],
              time: Date.now(),
              agent: getPartObject(navigator, ["appVersion"]),
              extra: getRequestInfo(event)
            }
          }
        };
        console.info("【Monitor-SDK】window.onunhandledrejection", result);
        _this.report(result);
      };

      // 3.静态资源加载报错(vue似乎不行)，常规报错(vue不行)，异步报错（与1会重复捕捉）
      window.addEventListener("error", function (_ref) {
        var message = _ref.message,
          colno = _ref.colno,
          lineno = _ref.lineno;
        var platform = _this.option.platform;
        var result = {
          type: "error",
          data: {
            platform: platform,
            lastUrl: getLastUrl(location),
            timestamp: Date.now(),
            logExtra: {
              msg: String(message),
              pageUrl: getLastUrl(location),
              type: [ErrorType.async.value, ErrorType.js.value, ErrorType.res.value],
              time: Date.now(),
              agent: getPartObject(navigator, ["appVersion"]),
              extra: {
                line: lineno,
                col: colno
              }
            }
          }
        };
        console.info("【Monitor-SDK】window.addEventListener.error", result);
        _this.report(result);
      }, true);

      // 4.Vue通过在main.js中声明此方法步骤常规报错和（疑似）静态资源加载报错
      // Vue.config.errorHandler = (err, _vueComponent, where) => {
      //   YourSafeMonitorSDKInstance.report({
      //     type: 'error',
      //     data: {
      //       lastUrl: document.URL,
      //       timestamp: Date.now(),
      //       logExtra : {
      //         msg: String(err),
      //         pageUrl: document.URL,
      //         type: [ErrorType.js.value, ErrorType.res.value],
      //         time: Date.now(),
      //         agent: getPartObject(navigator, ['appVersion']),
      //         extra: { where },
      //       } as ErrorData
      //     }
      //   })
      // }
    }
  }, {
    key: "initPerformanceMonitor",
    value: function initPerformanceMonitor() {
      var open = XMLHttpRequest.prototype.open;
      var send = XMLHttpRequest.prototype.send;
      var report = this.lazyReportCache;
      var methodMap = {};
      var platform = this.option.platform;
      // 不知为何ts识别不到重载open函数的第三个入参
      // @ts-ignore
      XMLHttpRequest.prototype.open = function (method, url, async, username, password) {
        methodMap[url.slice(0, url.indexOf('?'))] = method;
        return open.call(this, method, url, async, username, password);
      };
      XMLHttpRequest.prototype.send = function () {
        for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
          params[_key] = arguments[_key];
        }
        var startTime = Date.now(); // open, send, loadstart基本在同一毫秒发生
        this.addEventListener('loadend', function (event) {
          var request = event.target;
          var payload = parseJsonStrOrNot(params[0]);
          var _ref2 = request,
            status = _ref2.status,
            responseURL = _ref2.responseURL;
          var requestUrl = responseURL.slice("".concat(location.protocol, "//").concat(location.host).length, responseURL.indexOf('?') > -1 ? responseURL.indexOf('?') : responseURL.length);
          var result = {
            type: 'performance',
            data: {
              platform: platform,
              lastUrl: getLastUrl(location),
              timestamp: Date.now(),
              logExtra: {
                pageUrl: getLastUrl(location),
                duration: Date.now() - startTime,
                time: Date.now(),
                payload: payload,
                requestUrl: requestUrl,
                status: status,
                method: methodMap[requestUrl]
              }
            }
          };
          console.info("【Monitor-SDK】window.performance", result);
          report(result);

          // 在此捕捉非axios的接口报错
          if (status !== 200) {
            report(_objectSpread(_objectSpread({}, JSON.parse(JSON.stringify(result))), {}, {
              type: 'error'
            }));
          }
        });
        return send.call(this, params);
      };
    }
  }]);
  return SafeMonitorSDK;
}();