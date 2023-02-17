//234. Palindrome Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const reversed = head =>{
  let cur = head;
  let next;
  let prev = null;
  while (cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};
let isPalindrome = function(head) {
  let fast = head;
  let slow = head;
  let startPoineter = head;
  let length = 0;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    length ++;
  }

  let mid = reversed(slow);

  while (length) {
    length --;
    if (mid.val !== startPoineter.val) {
      return false;
    }
    mid = mid.next;
    startPoineter = startPoineter.next;
  }
  return true;
};

// 1->2->2>3->2->-2>->1
//using 2 pointers ->floyd's algorithm
//1->2->2 -> 3 <-2<-2<-2<-1
// fast -> 2 spaces
//slow -> 1 spaces
// Reverse liked list


