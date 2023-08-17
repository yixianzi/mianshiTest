/**
 * 求最长递增子序列：贪心+二分查找
 * @param arr
 * @returns
 */
function getSequence(arr) {
  // 浅拷贝数组，不影响原数组 arr
  const p = arr.slice();
  // 定义返回数组（最长递增子序列的下标）
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    // 获取当前下标对应元素
    const arrI = arr[i];
    // 排除等于 0 的情况
    if (arrI !== 0) {
      // 获取 result 中的最后一个元素
      j = result[result.length - 1];
      // 当前值 > 最后一个元素，说明存在升序序列，将下标放入 result 返回数组
      if (arr[j] < arrI) {
        // 存储在 result 更新前的最后一个索引的值
        p[i] = j;
        result.push(i);
        continue;
      }
      u = 0; // 初始下标
      v = result.length - 1; // 终止下标
      // 二分查找，查找比 arrI 小的节点
      while (u < v) {
        // 获取中间位置 c
        c = (u + v) >> 1;
        // 如果中间位的值 < arrI，则 u = 中间位 + 1
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          // 否则，v = c（中间位置）
          v = c;
        }
      }
      // 如果 arr[result[u]] < arrI，则证明当前 证明当前 result 中存在的下标不是递增序列，则需要进行替换
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1];
        }
        // 进行替换，替换为递增序列
        result[u] = i;
      }
    }
  }

  u = result.length;
  v = result[u - 1];
  // 回溯数组p，找到最终的索引
  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }
  return result;
}

let re = getSequence([10, 9, 2, 5, 3, 7, 101, 18]);
console.log(re);
