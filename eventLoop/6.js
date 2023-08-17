console.log("script start");

setTimeout(() => {
  console.log("Gopal");
}, 1 * 2000);

Promise.resolve()
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });

async function foo() {
  await bar();
  console.log("async1 end");
}
foo();

async function errorFunc() {
  try {
    // Tips:参考：https://zh.javascript.info/promise-error-handling：隐式 try…catch
    // Promise.reject()方法返回一个带有拒绝原因的Promise对象
    // Promise.reject('error!!!') === new Error('error!!!')
    await Promise.reject("error!!!");
  } catch (e) {
    console.log(e);
  }
  console.log("async1");
  return Promise.resolve("async1 success");
}
errorFunc().then((res) => console.log(res));

function bar() {
  console.log("async2 end");
}

console.log("script end");

// script start , async2 end, script end, promise1，async1 end， error!!!, async1,  promise2,async1 success， Gopal 错了
// 主要就是说await 后面都推进微任务里。
