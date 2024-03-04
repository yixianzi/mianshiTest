var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let dummy = new ListNode();
  let cur = head;
  let pre = dummy;
  while (cur && cur.next) {
    let first = cur;
    let second = cur.next;
    pre.next = second;
    first.next = second.next;
    cur = second.next;
    second.next = first;
    pre = first;
  }

  return dummy.next;
};

// 递归
var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let first = head;
  let second = head.next;
  first.next = swapPairs(second.next);
  second.next = first;
  return second;
};
