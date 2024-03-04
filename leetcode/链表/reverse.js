let reverseList = (head) => {
  if (!head) return null;
  let cur = head;
  let pre = null;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};

// 迭代
let reverseList1 = (head) => {
  if (!head) return null;
  let pre = null;
  const reverse = (cur, pre) => {
    if (!cur) return pre;
    let next = cur.next;
    cur.next = pre;
    reverse(next, cur);
  };
  return reverse(head, pre);
};
