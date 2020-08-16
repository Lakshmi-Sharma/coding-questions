// Leetcode 23. Merge k sorted lists
// Status: DONE (Slow)

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var mergeKLists = function(lists) {
  if (lists.length < 1) return null
  if (lists.length < 2) return lists[0]

  let pointers = []
  let head = null
  let tail = null
  lists.forEach((element, i) => pointers[i] = lists[i])
  while(true) {
    let min = null
    let mini = null
    for(let i = 0; i < lists.length; i++) {
      if(min === null || (pointers[i] && pointers[i].val < min.val)) { 
        min = pointers[i] 
        mini = i 
      }
    }
    if(min === null) break
    pointers[mini] = min.next
    min.next = null
    head ? tail.next = min : head = min
    tail = min
  }
  return head
};

lists = [[1,4,5],[1,3,4],[2,6]]
console.log(mergeKLists([
  new ListNode(1, new ListNode(4, new ListNode(5, null))),
  new ListNode(1, new ListNode(3, new ListNode(4, null))),
  new ListNode(2, new ListNode(6, null)),
]));
console.log(mergeKLists([]));