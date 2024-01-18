// bridge
import isPlainObject from 'lodash/isPlainObject';
import ENV from './env'; // 环境变量

const { isBridge, version } = ENV;

class Bridge {
  private readyPromise: Promise<any>;

  constructor() {
    if (isBridge) {
      this.readyPromise = this.ready();
    }
  }

  // 处理返回数据
  public async exec(name, params): Promise<any> {
    if (!isBridge) {
      return console.error('请使用 XX App 容器打开页面');
    }

    await this.readyPromise;

    const command = isPlainObject(params) ? params.command : '';
    const directive = [name, command].join(':');

    return new Promise((resolve) => {
      window.WebViewJavascriptBridge.callHandler(
        name,
        params,
        (response) => {
          if (typeof response === 'string') {
            response = JSON.parse(response);
          }
          if (response.code !== 0) {
            Promise.reject(`调用 XX App jsbridge: ${directive} 命令错误`);
          }
          resolve(response.data);
        },
        (fail) => {
          Promise.reject(`调用 XX App jsbridge: ${directive} 命令错误`);
        }
      );
    });
  }

  /**
   * comand交互
   */
  public async command(command, params?) {
    return await this.exec('command', { command, values: params });
  }

  /**
   * 注册交互
   */
  public async registerHandler(...props) {
    if (!isBridge) {
      return;
    }
    await this.readyPromise;
    return window.WebViewJavascriptBridge.registerHandler(...props);
  }

  private ready() {
    return new Promise((resolve) => {
      // 设置超时阀值
      const timer = setTimeout(() => {
        Promise.reject('JSBridge注入失败');
      }, 5e3);
      // 计时开始
      const before = performance.now();
      // WebViewJavascriptBridge 初始化任务
      const init = () => {
        clearTimeout(timer);
        if (window.WebViewJavascriptBridge.init && !window.WebViewJavascriptBridge.inited) {
          window.WebViewJavascriptBridge.init();
        }
        resolve();
        
        //其他逻辑，统计、发送日志等
        //...
      };

      if (window.WebViewJavascriptBridge) {
        init();
      } else {
        document.addEventListener('WebViewJavascriptBridgeReady', init, false);
      }
    });
	};

export default new Bridge();


// page.js
// 通过bridge使用
import bridge from 'bridge';

// 获取原生App上的用户数据
async getUserInfo() {
    return await this.command('getUserInfo');
}
// 注册监听回退事件
bridge.registerHandler('h5goBack', () => {
  bridge.exec('closeWebView', data);
});
