const arr = [78, 21, 32, 1, 78, 333, 112, 8, 56, 3, 7, 2];

const sort = (arr) => {
  if (arr.length <= 1) return arr;
  let left = [];
  let right = [];
  let cur = arr.splice(0, 1);
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] < cur) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...sort(left), ...cur, ...sort(right)];
};

console.log(sort(arr));
