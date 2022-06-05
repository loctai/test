class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }

  randomly(value) {
    let node = this.root;
    if (!node) {
      node = new Node(value);
    }
    const shouldGoLeft = Math.random() >= 0.5;
    if (!node.left || shouldGoLeft) {

    }
  }
  insert(value) {
    const shouldGoLeft = Math.random() >= 0.5;
    let position = shouldGoLeft ? "left" : "right";
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode, position);
    }
  }
  insertNode(node, newNode, position) {

    if (position == "left") {
      if (node.left === null) {
        node.left = newNode;
        return;
      }
      this.insertNode(node.left, newNode, position);
    } else {
      if (node.right === null) {
        node.right = newNode;
        return;
      }
      this.insertNode(node.right, newNode, position);
    }
  }
  InsertlevelOrder(value) {
      let root = this.root;
      let newNode = new Node(value)
      const queue = [root];
      let loop = true
      while (queue.length) {
        const length = queue.length;
        for (let i = 0; i < length; i++) {
          const current = queue.shift();
          if (!current.left) {
            current.left = newNode;
            loop = false;
            return;
          } else if (!current.right) {
            current.right = newNode
            loop = false;
            return;
          } else {
            queue.push(current.left)
            queue.push(current.right)
          }
    
        }
        if (!loop) {
          break;
        }
    
      }
      return true
    
    }
}


const binaryTree = new BinaryTree()
function randomly(value) {
  
  binaryTree.insert(value)
  return binaryTree.root
}
function insertNode(node, parent, position, value) {
  console.log(node, position, parent, value);
  if (node.value === parent) {
    node[position]["value"] = value;
    return;
  } else {
    if (node.right) {
      insertNode(node.right, parent, position, value);
    }
    if (node.left) {
      insertNode(node.right, parent, position, value);
    }
  }

}
function levelOrder(value) {
  binaryTree.InsertlevelOrder(value)
  return binaryTree.root

}

function binarySearchTree(tree, value) {
  //TODO: Task 2
  return randomly(tree, value);
}

export {
  randomly,
  levelOrder,
  binarySearchTree,
  BinaryTree
};
