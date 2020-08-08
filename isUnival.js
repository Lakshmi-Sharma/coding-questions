// Leetcode 965. Univalued Binary Tree
// Status DONE Recursive (10 mins)

// Recursive
var isUnivalTree = function(root) {
  let val = root.val
  return UT(root.left) && UT(root.right)
};

function UT(node, val) {
  if(node === null) return true
  if(node.val === val) {
    return UT(node.left, val) && UT(node.right, val)
  }
  return false
}

// Non recursive
// var isUnivalTree = function(root) {
//   let val = root.val
//   let stack = [root]
//   while(stack.length !== 0) {
//     let node = stack.pop
//     if(node.val === val) {
//       if(node.left) stack.push(node.left)
//       if(node.right) stack.push(node.righr)
//     }
//     else {
//       return false
//     }    
//   }
//   return true
// };

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

console.log(isUnival());