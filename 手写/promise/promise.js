const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";
// const a = new Promise((resolve, reject) => {
//   resolve(1);
// });
// a.then((r) => {
//   console.log(r);
// });

// a.then(2).then((r) => {
//   console.log(r);
// });
function MyPromise(fn) {
  // 保存初始化状态
  const self = this;

  this.state = PENDING;

  this.value = null;

  this.resolvedCallbacks = [];

  this.rejectedCallbacks = [];

  function resolve(value) {
    if (value instanceof MyPromise) {
      return value.then(resolve, reject);
    }
    // 保证代码的执行顺序为本轮事件循环的末尾
    setTimeout(() => {
      if (self.state === PENDING) {
        self.state = RESOLVED;

        self.value = value;

        self.resolvedCallbacks.forEach((callback) => callback(value));
      }
    }, 0);
  }

  function reject(value) {
    setTimeout(() => {
      if (self.state === PENDING) {
        self.state = REJECTED;

        self.value = value;

        self.rejecteddCallbacks.forEach((callback) => callback(value));
      }
    }, 0);
  }

  try {
    fn(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

// MyPromise.prototype.then1 = function (onResolved, onRejected) {
//   // 不是function放弃这个，沿袭上一个、
//   onResolved =
//     typeof onResolved === "function"
//       ? onResolved
//       : function (value) {
//           return value;
//         };

//   onRejected =
//     typeof onRejected === "function"
//       ? onRejected
//       : function (error) {
//           throw error;
//         };

//   if (this.state === PENDING) {
//     this.resolvedCallbacks.push(onResolved);
//     this.rejectedCallbacks.push(onRejected);
//   }

//   // 如果状态已经凝固，则直接执行对应状态的函数

//   if (this.state === RESOLVED) {
//     onResolved(this.value);
//   }

//   if (this.state === REJECTED) {
//     onRejected(this.value);
//   }
// };

MyPromise.prototype.then = function (onFulfilled, onReject) {
  // 保留前一个promise的this
  const self = this;
  return new MyPromise((resolve, reject) => {
    // 封装前一个promise成功时执行的函数
    let fulfilled = () => {
      try {
        const result = onFulfilled(self.value); // 承前
        return result instanceof MyPromise
          ? result.then(resolve, reject)
          : resolve(result);
      } catch (err) {
        reject(err);
      }
    };
    // 封装前一个promise失败时执行的函数
    let rejected = () => {
      try {
        const result = onReject(self.reason);
        return result instanceof MyPromise
          ? result.then(resolve, reject)
          : reject(result);
      } catch (err) {
        reject(err);
      }
    };
    switch (self.status) {
      case PENDING:
        self.resolvedCallbacks.push(fulfilled);
        self.rejectedCallbacks.push(rejected);
        break;
      case RESOLVED:
        fulfilled();
        break;
      case REJECTED:
        rejected();
        break;
    }
  });
};
console.log("xxxx");
const a1 = new MyPromise((resolve, reject) => {
  resolve(1);
});
a1.then((r) => {
  console.log(r);
});

a1.then(2).then((r) => {
  console.log(r);
});
