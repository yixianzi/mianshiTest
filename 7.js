const proxyThrottle = (func,time) => {
  let previous = new Date(0).getTime(); // 初始化，写个原始时间
  let handler = {
    apply(target, context, args) {
      let now = new Date().getTime();
      if(now - previous > time){
        // 间隔时间超过节流时间则运行函数
        previous = now;
        Reflect.apply(func,context, args);
      }
    }
  }

  return new Proxy(func,handler)
}

const testFunc = () => {
  console.log(1);
}

const throttleFunc = proxyThrottle(testFunc,100)

console.log(new Date().getTime());
for (let index = 0; index < 1000000; index++) {
  throttleFunc()
}
console.log(new Date().getTime());