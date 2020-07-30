// Definition for singly-linked list.
class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

var partition = function(head, x) {
  var leftStart, leftEnd, rightStart, rightEnd
  
  leftStart = head
  while(head.next != null){
    if(head.next.val === x) {
      leftEnd = head
      rightStart = head.next.next
    }
    head = head.next
  }
  rightEnd = head
  console.log(leftStart.val, leftEnd.val, rightStart.val, rightEnd.val)

  while(leftStart.val !== x) {
    if(leftStart.val > x) {
      
    }
  }
};


let head =  new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2, null))))))
partition(head, 3)