const arr = [78, 21, 32, 1, 78, 333, 112, 8, 56, 3, 7, 2];

const sort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (j = i + 1; j < len; j++) {
      if (arr[j] < arr[i]) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }
  return arr;
};

console.log(sort(arr));
