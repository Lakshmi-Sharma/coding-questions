class Node {
  constructor(data) {
    this.value = data
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  add(data) {
    let newNode = new Node(data)
    if(this.root === null) { this.root = newNode; return }
    
    // // Recursive
    // let addToTree = function(node) {
    //   if(node.value > data) {
    //     if(node.left === null) { node.left = newNode }
    //     else { addToTree(node.left) }
    //   }
    //   else {
    //     if(node.right === null) { node.right = newNode }
    //     else { addToTree(node.right) }
    //   }
    // }
    // addToTree(this.root)

    // Non recursive
    let node = this.root
    while(node !== null) {
      if(node.value > data) {
        if(node.left === null) { node.left = newNode; break; }
        else { node = node.left }
      }
      else {
        if(node.right === null) { node.right = newNode; break; }
        else { node = node.right }
      }
    }
  }
}

let searchTree = new BST()
searchTree.add(4)
searchTree.add(2)
searchTree.add(1)
searchTree.add(0)

console.log(searchTree);