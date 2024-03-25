var maxSlidingWindow = function (nums, k) {
  let len = nums.length;
  let init = nums.slice(0, k).sort((a, b) => a - b);
  console.log(init);
  let tMax = init[k - 1];
  let r = [tMax];
  for (let i = 1; i < len - k + 1; i++) {
    if (nums[i - 1] !== tMax) {
      tMax = Math.max(tMax, nums[i + k - 1]);
      init = nums.slice(i, i + k).sort((a, b) => a - b);
    } else {
      if (nums[i + k - 1] >= init[k - 2]) {
        tMax = nums[i + k - 1];
        init[k - 1] = tMax;
      } else {
        init.pop();
        let t = nums[i + k - 1];
        let left = 0;
        let right = k - 2;
        let mid = 0;
        while (left <= right) {
          mid = (left + right) >>> 1;
          if (init[mid] > t) {
            right--;
          } else if (init[mid] < t) {
            left++;
          } else {
            break;
          }
        }
        init.splice(mid, 0, t);
        tMax = init[k - 1];
      }
    }
    r.push(tMax);
  }
  console.log(init);
  return r;
};

const a = maxSlidingWindow([9, 10, 9, -7, -4, -8, 2, -6], 5);
console.log(a);
