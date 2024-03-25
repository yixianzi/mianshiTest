var trap = function (height) {
  let len = height.length;
  let re = 0;
  let max = 0;
  for (let i = 0; i < len; i++) {
    max = Math.max(max, height[i]);
  }
  const dp = {
    lmax: 0,
    rmax: max,
    cur: 0,
  };
  let sum = 0;
  for (let i = 1; i < len; i++) {
    dp.lmax = Math.max(dp.lmax, height[i - 1]);
    dp.rmax = Math.max(dp.rmax);
  }
};
