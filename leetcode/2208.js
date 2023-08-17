/**
 * @param {number[]} nums
 * @return {number}
 */
var halveArray = function (nums) {
  let len = nums.length;
  nums.sort((a, b) => a - b);
  let r = 0;
  let sum = nums.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
  let j = 0;
  while (j < sum / 2) {
    r++;
    let tem = nums.pop() / 2;
    j += tem;

    if (tem > nums[len - 2]) {
      nums.push(tem);
      continue;
    }
    if (tem < nums[0]) {
      nums.unshift(tem);
      continue;
    }

    let left = 0;
    let right = len - 2;
    while (left <= right) {
      let mid = (left + right) >>> 1;
      if ((nums[mid] < tem && nums[mid + 1] > tem) || nums[mid] == tem) {
        nums.splice(mid + 1, 0, tem);
        break;
      }
      if (nums[mid] > tem) {
        right = mid - 1;
      }
      if (nums[mid] < tem) {
        left = mid + 1;
      }
    }
    // for (let i = len - 1; i >= 0; i--) {
    //   if (nums[i] < tem) {
    //     nums.splice(i + 1, 0, tem);
    //     break;
    //   }
    // }
  }
  return r;
};

const r = halveArray([1, 1]);
console.log(r);
