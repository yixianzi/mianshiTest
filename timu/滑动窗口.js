// 找最长不重复子串
const maxNoRepeatStr = (str) => {
  const length = str.length;
  let left = 0;
  let right = 0;
  let result = 0;
  const set = new Set();
  while (left < length) {
    while (right < length && !set.has(str[right])) {
      set.add(str[right]);
      right++;
    }
    result = Math.max(result, right - left);

    set.delete(str[left]);
    left++;
  }
  return result;
};
