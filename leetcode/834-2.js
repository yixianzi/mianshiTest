const sumOfDistancesInTree = (N, edges) => {
  let map = new Map();
  for (let i = 0; i < N; i++) {
    map.set(i, []);
  }
  for (let i = 0; i < edges.length; i++) {
    map.set(edges[i][0], [...map.get(edges[i][0]), edges[i][1]]);
    map.set(edges[i][1], [...map.get(edges[i][1]), edges[i][0]]);
  }
  let ans = Array(N).fill(0);
  const sizeArr = new Array(N).fill(1);
  const dfs_size = (c, p, dep) => {
    ans[0] += dep;
    const curChild = map.get(c);
    if (curChild.length == 1) return 1;
    for (let child of curChild) {
      if (child == p) continue;
      sizeArr[c] += dfs_size(child, c, dep + 1);
    }
    return sizeArr[c];
  };
  dfs_size(0, -1, 0);
  console.log(sizeArr);

  const dfs_ans = (c, p) => {
    for (const y of map.get(c)) {
      if (y == p) continue;
      ans[y] = ans[c] + N - 2 * sizeArr[y];
      dfs_ans(y, c);
    }
  };
  dfs_ans(0, -1);
  return ans;
};

sumOfDistancesInTree(6, [
  [0, 1],
  [0, 2],
  [2, 3],
  [2, 4],
  [2, 5],
]);
