const testArray = [1, [2, [3, [4, 5]]], 6];

let flatten = function (arr) {
  let re = [];
  let fn = function (target, ary) {
    for (let i = 0; i < ary.length; i++) {
      if (Array.isArray(ary[i])) {
        fn(target, ary[i]);
      } else {
        target.push(ary[i]);
      }
    }
  };
  fn(re, arr);
  return re;
};

console.log(flatten(testArray));

let reduceFlat = function (arr) {
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      return pre.concat(reduceFlat(cur));
    } else {
      pre.push(cur);
      return pre;
    }
  }, []);
};
console.log(reduceFlat(testArray));

let flattenR = (nestedList) =>
  nestedList.reduce(
    (pre, cur) => pre.concat(Array.isArray(cur) ? flatten(cur) : cur),
    []
  );
