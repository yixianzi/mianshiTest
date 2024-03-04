const quickSort = (arr) => {
  let len = arr.length;
  let l = 0;
  let r = len - 1;
  const helper = (l, r) => {
    if (l >= r) return;
    const p = arr[r];
    let t = l;
    for (let i = l; i < r; i++) {
      if (arr[i] <= p) {
        swap(i, t);
        t++;
      }
    }
    swap(r, t);
    helper(l, t - 1);
    helper(t + 1, r);
  };
  const swap = (m, n) => {
    let tem = arr[m];
    arr[m] = arr[n];
    arr[n] = tem;
  };
  helper(l, r);
  return arr;
};
const a = quickSort([3, 1, 4, 6, 101, 23, 12]);
console.log(a);
