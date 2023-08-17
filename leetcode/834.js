const sumOfDistancesInTree = (N, edges) => {
  // 建立映射表，graph[i]：存放节点i 和 与它相连的所有节点
  const graph = new Array(N);
  for (let i = 0; i < graph.length; i++) {
    graph[i] = [];
  }
  for (const edge of edges) {
    const [from, to] = edge;
    graph[from].push(to);
    graph[to].push(from);
  }

  // distSum[i]：节点i到它所在子树的节点的距离和，后面更新为：节点i到其他所有节点的距离和
  const distSum = new Array(N).fill(0);
  // nodeNum[i]：节点i所在子树的节点个数，保底为1
  const nodeNum = new Array(N).fill(1);

  const postOrder = (root, parent) => {
    const neighbors = graph[root]; // 与它相连的节点们
    for (const neighbor of neighbors) {
      if (neighbor == parent) {
        // 如果邻居是自己父亲，跳过。
        continue; // 如果邻居只有自己父亲，则for循环结束，当前递归结束
      }
      postOrder(neighbor, root); // 先压栈压到base case，再进行计算
      nodeNum[root] += nodeNum[neighbor]; // 累加计算当前root子树的节点个数
      distSum[root] += nodeNum[neighbor] + distSum[neighbor]; // 累加计算到子树中节点的距离和
    }
  };

  const preOrder = (root, parent) => {
    const neighbors = graph[root]; // 获取当前root节点的邻居
    for (const neighbor of neighbors) {
      // 遍历邻居
      if (neighbor == parent) {
        // 如果邻居是它的父亲，跳过
        continue; // 如果邻居只有自己父亲，则for循环结束，当前递归结束
      }
      // 自顶而下 更新子节点们的真正的distSum
      distSum[neighbor] =
        distSum[root] - nodeNum[neighbor] + (N - nodeNum[neighbor]);
      // 先拿到正确的distSum，再递归压栈（进入子树求更多的distSum）
      preOrder(neighbor, root);
    }
  };

  postOrder(0, -1); // dfs的入口。因为N>=1，节点0肯定存在，就从节点0开始搜
  preOrder(0, -1);
  return distSum;
};
