// view: PV,UV，error：错误, performance: 性能,click: 点击

// 前端报错类型
export var ErrorType = {
  js: {
    label: 'JS异常',
    value: 'js'
  },
  async: {
    label: '异步报错',
    value: 'async'
  },
  res: {
    label: '静态资源加载异常',
    value: 'res'
  },
  promise: {
    label: 'promise异常',
    value: 'promise'
  },
  request: {
    label: '接口报错或超时',
    value: 'request'
  }
};

// 报错上传信息结构