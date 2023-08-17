/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let len = nums.length;
  let min = Infinity;
  let re = null;
  for (let i = 0; i < len - 2; i++) {
    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      if (nums[i] + nums[left] + nums[right] == target) {
        re = target;
        break;
      }

      while (nums[i] + nums[left] + nums[right] < target && left < right) {
        if (min > Math.abs(nums[i] + nums[left] + nums[right] - target)) {
          min = Math.abs(nums[i] + nums[left] + nums[right] - target);
          re = nums[i] + nums[left] + nums[right];
        }
        left++;
      }

      while (nums[i] + nums[left] + nums[right] > target && left < right) {
        if (min > Math.abs(nums[i] + nums[left] + nums[right] - target)) {
          min = Math.abs(nums[i] + nums[left] + nums[right] - target);
          re = nums[i] + nums[left] + nums[right];
        }
        right--;
      }
    }
  }
  return re;
};

console.log(threeSumClosest([1, 1, 1, 0], -100));
