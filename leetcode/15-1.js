var threeSum = function (nums) {
  let re = [];
  let len = nums.length;
  nums.sort((a, b) => a - b);
  console.log(nums);
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if (i > 0 && nums[i] == nums[i - 1]) continue; // 去重

    const t = 0 - nums[i];
    let l = i + 1;
    let r = len - 1;
    while (l < r) {
      const sum = nums[l] + nums[r];
      if (sum > t) {
        r--;
      } else if (sum < t) {
        l++;
      } else {
        re.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] == nums[l + 1]) {
          l++;
        }
        while (l < r && nums[r] == nums[r - 1]) {
          r--;
        }
        l++;
        r--;
      }
    }
  }
  return re;
};
const a = threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);
console.log(a);
