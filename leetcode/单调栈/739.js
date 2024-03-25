var dailyTemperatures = function (temperatures) {
  let len = temperatures.length;
  let re = new Array(len).fill(0);
  const stack = [];
  for (let i = 0; i < len; i++) {
    console.log(stack);
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      const t = stack.pop();
      re[t] = i - t;
    }

    stack.push(i);
  }
  return re;
};

let a = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);

console.log(a);
