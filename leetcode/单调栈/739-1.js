// 从右向左
var dailyTemperatures = function (temperatures) {
  let len = temperatures.length;
  let re = new Array(len).fill(0);
  const stack = [];
  for (let i = len - 1; i >= 0; i--) {
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] <= temperatures[i]
    ) {
      stack.pop();
    }
    if (stack.length > 0) {
      re[i] = stack[stack.length - 1] - i;
    }
    stack.push(i);
  }
  return re;
};

let a = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);

console.log(a);
