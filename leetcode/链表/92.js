var reverseBetween = function (head, left, right) {
  if (!head.next) return head;
  let n = 1;
  let pre = null;
  let cur = head;
  let startReverse = false;
  let sPre = null;
  while (n <= right) {
    if (n == left) {
      startReverse = true;
    }
    if (startReverse) {
      let next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    } else {
      sPre = cur;
      pre = cur;
      cur = cur.next;
    }
    n++;
  }
  if (sPre) {
    let tem = sPre.next;
    sPre.next = pre;
    tem.next = cur;
    return head;
  } else {
    head.next = cur;
  }
  return pre;
};
