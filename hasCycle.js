// 141. Linked List Cycle

let hasCycle = function(head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return  fast === slow;
};

console.log(hasCycle[3,2,0,-4]);

