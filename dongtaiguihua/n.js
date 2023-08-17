var numSquares = function (n) {
  let map = new Map();
  let queue = [];
  queue.push([n, 0]);
  map.set(n, true);
  while (queue.length) {
    let [num, step] = queue.shift();
    for (let i = 1; ; i++) {
      let nextNum = num - i * i;
      if (nextNum < 0) break;
      if (nextNum == 0) return step + 1;
      // nextNum 未被访问过
      if (!map.get(nextNum)) {
        queue.push([nextNum, step + 1]);
        // 标记已经访问过
        map.set(nextNum, true);
      }
    }
  }
};

console.log(numSquares(12));
