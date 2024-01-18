function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
export function deepCopy(target) {
  if (_typeof(target) === "object") {
    var result = Array.isArray(target) ? [] : {};
    for (var _key in target) {
      if (_typeof(target[_key]) == "object") {
        result[_key] = deepCopy(target[_key]);
      } else {
        result[_key] = target[_key];
      }
    }
    return result;
  }
  return target;
}

// 获取某个对象的部分键值
export var getPartObject = function getPartObject() {
  var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var partKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return partKeys.reduce(function (prev, cur) {
    prev[cur] = origin[cur];
    return prev;
  }, {});
};

// 获取某个异常接口的method, url和传参
export var getRequestInfo = function getRequestInfo(requestEvent) {
  if (!requestEvent.reason.config) {
    return;
  }
  var _requestEvent$reason$ = requestEvent.reason.config,
    url = _requestEvent$reason$.url,
    method = _requestEvent$reason$.method,
    _requestEvent$reason$2 = _requestEvent$reason$.params,
    params = _requestEvent$reason$2 === void 0 ? '' : _requestEvent$reason$2,
    _requestEvent$reason$3 = _requestEvent$reason$.data,
    data = _requestEvent$reason$3 === void 0 ? '' : _requestEvent$reason$3;
  return {
    requestUrl: url,
    method: method,
    params: params,
    data: parseJsonStrOrNot(data)
  };
};
export var parseJsonStrOrNot = function parseJsonStrOrNot(str) {
  var isJsonStr = typeof str === 'string' && ((str === null || str === void 0 ? void 0 : str.indexOf('{')) > -1 || (str === null || str === void 0 ? void 0 : str.indexOf('[')) > -1);
  return isJsonStr ? JSON.parse(str) : str;
};
export var getLastUrl = function getLastUrl(location) {
  try {
    var _ref = location || {},
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? '' : _ref$href;
    var array = href.split('//')[1].split('/');
    var l = array.length;
    var tempArray = [];
    for (var i = 1; i < array.length; i++) {
      tempArray.push(array[i]);
    }
    return tempArray.join('/');
  } catch (err) {
    return location.href;
  }
};