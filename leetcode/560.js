var subarraySum = function (nums, k) {
  const len = nums.length;
  const sums = new Array(len).fill(0);
  sums[0] = nums[0];
  for (let i = 1; i < len; i++) {
    sums[i] = sums[i - 1] + nums[i];
  }
  let re = 0;
  let map = new Map();
  map.set(0, 1);
  for (let i = 0; i < len; i++) {
    if (map.has(sums[i] - k)) {
      re += map.get(sums[i] - k);
    }
    if (map.has(sums[i])) {
      let tem = map.get(sums[i]) + 1;
      map.set(sums[i], tem);
    } else {
      map.set(sums[i], 1);
    }
  }
  return re;
};

const a = subarraySum([-1, -1, 1], 0);
console.log(a);
