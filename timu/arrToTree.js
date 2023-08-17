// 扁平结构
const list = [
  {
    name: "数据1",
    parent: null,
    id: 1,
  },
  {
    name: "数据2",
    id: 2,
    parent: 1,
  },
  {
    name: "数据3",
    parent: 2,
    id: 3,
  },
  {
    name: "数据4",
    parent: 3,
    id: 4,
  },
];

// 树形结构
const tree = [
  {
    name: "数据1",
    id: 1,
    children: [
      {
        name: "数据2",
        id: 2,
        children: [
          {
            name: "数据3",
            id: 3,
            children: [
              {
                name: "数据4",
                id: 4,
              },
            ],
          },
        ],
      },
    ],
  },
];

const arrToTree = (arr) => {
  let re = [];
  const getChildren = (r, id) => {
    for (let item of arr) {
      if (item.parent == id) {
        const child = {
          ...item,
          children: [],
        };
        r.push(child);
        getChildren(child.children, item.id);
      }
    }
  };
  getChildren(re, null);
  return re;
};
console.log(arrToTree(list));
