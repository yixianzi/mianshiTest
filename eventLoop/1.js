console.log("start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

Promise.resolve()
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });

console.log("end");

// start,end,promise1,promise2,setTimeout

// start
// end
// promise1
// promise2
// setTimeout
