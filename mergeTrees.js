var mergeTrees = function(t1, t2) {
  console.log(t1);
  
  console.log(t2);
  if(t1.val === null) return t2
  if(t2.val === null) return t1
  let baseNode = new TreeNode(null)
  let nodes = [baseNode, t1, t2]
  var node
  while(nodes.length !== 0) {
    var nodeT2 = nodes.pop
    var nodeT1 = nodes.pop
    node = nodes.pop
    if(nodeT1.left !== null ) { nodes.push(nodeT1.left) }
    if(nodeT2.left !== null ) { nodes.push(nodeT2.left) }

    if(nodeT1.right !== null ) { nodes.push(nodeT1.right) }
    if(nodeT2.right !== null ) { nodes.push(nodeT2.right) }

    node.val = nodeT1.val + nodeT2.val
    nodes
  }
  console.log(node);
  
  return baseNode
};


var TreeNode = function (val) {
  this.val = val;
  this.left = this.right = null;
}

var t1 = new TreeNode(1)
t1.left = new TreeNode(3)
t1.left.left = new TreeNode(5)
t1.right = new TreeNode(2)

var t2 = new TreeNode(2)
t2.left = new TreeNode(1)
t2.left.right = new TreeNode(4)
t2.right = new TreeNode(3)
t2.right.right = new TreeNode(7)


console.log(mergeTrees(t1, t2));