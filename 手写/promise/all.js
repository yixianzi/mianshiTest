function promiseAll(promises) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(promises)) {
      throw new TypeError("arguments must be an array");
    }

    let resolvedCounter = 0;
    let promieNum = promises.length;
    let resolvedResult = [];

    for (let i = 0; i < promieNum; i++) {
      Promise.resolve(promises[i]).then(
        (r) => {
          resolvedCounter++;
          resolvedResult[i] = r;
          if (resolvedCounter == promieNum) {
            return resolve(resolvedResult);
          }
        },
        (err) => {
          return reject(err);
        }
      );
    }
  });
}

const a = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 500);
});

Promise.resolve(a).then((r) => {
  console.log(r);
});
