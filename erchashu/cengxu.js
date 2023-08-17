// 层序遍历
const root = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null,
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

const levelorder = (root) => {
  if (!root) return;
  let queue = [root];
  let re = [];

  while (queue.length > 0) {
    const queueLength = queue.length;
    const levelRe = [];
    for (let i = 0; i < queueLength; i++) {
      let tem = queue.shift();
      levelRe.push(tem.val);
      if (tem.left) queue.push(tem.left);
      if (tem.right) queue.push(tem.right);
    }
    re.push(levelRe);
  }
  return re;
};

console.log(levelorder(root));
const levelorderReverse = (root) => {
  if (!root) return;
  let queue = [root];
  let re = [];
  let sign = true;

  while (queue.length > 0) {
    const queueLength = queue.length;
    const levelRe = [];
    for (let i = 0; i < queueLength; i++) {
      if (sign) {
        let tem = queue.shift();
        levelRe.push(tem.val);
        if (tem.left) queue.push(tem.left);
        if (tem.right) queue.push(tem.right);
      } else {
        let tem = queue.pop();
        levelRe.push(tem.val);
        if (tem.right) queue.unshift(tem.right);
        if (tem.left) queue.unshift(tem.left);
      }
    }
    sign = !sign;
    re.push(levelRe);
  }
  return re;
};

console.log(levelorderReverse(root));
const levelorderReverse2 = (root) => {
  if (!root) return;
  let queue = [root];
  let re = [];
  let sign = true;

  while (queue.length > 0) {
    const queueLength = queue.length;
    let levelRe = [];
    for (let i = 0; i < queueLength; i++) {
      let tem = queue.shift();
      levelRe.push(tem.val);
      if (tem.left) queue.push(tem.left);
      if (tem.right) queue.push(tem.right);
    }
    if (sign) {
      re.push(levelRe);
    } else {
      re.push(levelRe.reverse());
    }

    sign = !sign;
  }
  return re;
};
console.log(levelorderReverse2(root));

const rightSideView = (root) => {
  if (!root) return [];
  let queue = [root];
  let re = [];

  while (queue.length > 0) {
    const queueLength = queue.length;
    const levelRe = queue[queueLength - 1].val;
    for (let i = 0; i < queueLength; i++) {
      let tem = queue.shift();
      if (tem.left) queue.push(tem.left);
      if (tem.right) queue.push(tem.right);
    }
    re.push(levelRe);
  }
  return re;
};
console.log(rightSideView(root));
