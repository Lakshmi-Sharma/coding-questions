// Leetocde 725. Split Linked List in Parts
// Status DONE 20 - 25 mins

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

// Solution 1
var splitListToParts = function(root, k) {
  let size = 0
  let node = root
  while(node) { node = node.next; size++ }
  let split_size = parseInt(size / k)
  let extras = size % k
  let res = []
  node = root
  for(let i = 0; i < k; i++) {
    let part = node
    let prev = node
    let part_size = split_size + (extras > 0 ? 1 : 0)

    while(node && part_size !== 0) {
      prev = node
      node = node.next
      part_size--
    }
    if(prev) {prev.next = null}
    extras--
    res.push(part)
  }
  return res
};

console.log(splitListToParts(new ListNode(1, new ListNode(2, new ListNode(3, null))), 5)); 
console.log(splitListToParts(
  new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, 
  new ListNode(6, new ListNode(7, new ListNode(8, new ListNode(9, new ListNode(10, null)))))))))), 5)); 
