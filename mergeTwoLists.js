var Node = function(val, next) {
  this.val = val
  this.next = next
}

var mergeTwoLists = function(l1, l2) {
  let head = null
  let tail = null

  while(l1 !== null && l2 !== null) {
    let next = null
    if(l1.val < l2.val) {
      next = l1
      l1 = l1.next
    }
    else {
      next = l2
      l2 = l2.next
    } 
    next.next = null
    if(!head) head = next
    if(tail) tail.next = next
    tail = next
  }
  if(!head) head = l1 || l2
  else{
    if(l1 !== null) tail.next = l1
    if(l2 !== null) tail.next = l2  
  }
  return head
};

console.log(mergeTwoLists(null, null));

console.log(mergeTwoLists(new Node(0, null), null));
console.log(mergeTwoLists(new Node(1, new Node(2, new Node(4, null))), new Node(1, new Node(3, new Node(4, null)))));