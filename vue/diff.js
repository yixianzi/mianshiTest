// let oldVnode = [h("p", { key: "A" }, "A"), h("p", { key: "B" }, "B")];
// let newVnode = [
//   h("p", { key: "A" }, "A"),
//   h("p", { key: "B" }, "B"),
//   h("p", { key: "C" }, "C"),
// ];

let oldVnode = [
  h("p", { key: "D" }, "D"),
  h("p", { key: "A" }, "A"),
  h("p", { key: "B" }, "B"),
  h("p", { key: "C" }, "C"),
];
let newVnode = [
  h("p", { key: "A" }, "A"),
  h("p", { key: "B" }, "B"),
  h("p", { key: "C" }, "C"),
];

// 接收新老节点arr
function diffVNode(oldV, newV) {
  let i = 0; // 定义初始头指针
  let e1 = oldV.length - 1; // 定义老节点尾指针
  let e2 = newV.length - 1; // 定义老节点尾指针

  while (i <= e1 && i <= e2) {
    // 获取i指针处的新老虚拟节点
    const n1 = oldV[i];
    const n2 = newV[i];
    // 判断i指针处的新老节点是否相同
    if (isSameVNodeType(n1, n2)) {
      // 如果新老节点相同，需要执行patch函数去递归比较n1，n2，看子节点是否更新
      console.log("patch");
    } else {
      break;
    }
    i++; // 如果新老节点相同，指针往前一位
  }
  console.log(i); // 得到头边界

  while (i <= e1 && i <= e2) {
    // 获取i指针处的新老虚拟节点
    const n1 = oldV[e1];
    const n2 = newV[e2];
    // 判断i指针处的新老节点是否相同
    if (isSameVNodeType(n1, n2)) {
      // 如果新老节点相同，需要执行patch函数去递归比较n1，n2，看子节点是否更新
      console.log("patch");
    } else {
      break;
    }
    e1--; // 如果新老节点相同，老虚拟节点尾指针退一位
    e2--; // 如果新老节点相同，新虚拟节点尾指针退一位
  }
  console.log(e1, e2);
}

// 转虚拟节点函数
function h(type, props, children) {
  return { type: type, props: props, children: children };
}

// 判断节点是否相同
function isSameVNodeType(n1, n2) {
  return n1.type == n2.type && n1.props.key == n2.props.key;
}
diffVNode(oldVnode, newVnode);
