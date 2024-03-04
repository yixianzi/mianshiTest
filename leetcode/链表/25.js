// k个链表反转
var reverseKGroup = function (head, k) {
  let cur = head;
  for (let i = 0; i < k; i++) {
    if (!cur) {
      return head;
    }
    cur = cur.next;
  }

  let pre = null;
  let dummy = head;
  for (let i = 0; i < k; i++) {
    let next = dummy.next;
    dummy.next = pre;
    pre = dummy;
    dummy = next;
  }
  dummy.next = reverseKGroup(cur, k);
  return pre;
};
