class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    console.log("The number of nodes is: ", this.count);
    return this.count;
  }

  insert(val) {
    this.count++;
    let newNode = new Node(val);

    let search = node => {
      if (val < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          search(node.left);
        }
      }

      if (val >= node.value) {
        if (!node.right) {
          node.right = newNode;
        } else {
          search(node.right);
        }
      }
    };

    search(this.root);
  }

  min() {
    let currentNode = this.root;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    console.log("The minimal value in the tree is: ", currentNode.value);

    return currentNode.value;
  }

  max() {
    let currentNode = this.root;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    console.log("The maximal value in the tree is: ", currentNode.value);

    return currentNode.value;
  }

  contains(val) {
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value === val) {
        console.log("Value found!");
        return true;
      }
      if (currentNode.value < val) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }

    console.log("Value NOT found!");
    return false;
  }

  //Depth First Search - DFS

  dfsInOrder() {
    let result = [];

    let collectElem = node => {
      if (node.left) collectElem(node.left);

      result.push(node.value);

      if (node.right) collectElem(node.right);
    };

    collectElem(this.root);

    console.log("The DFS -in order- is: ", ...result);
    return result;
  }

  dfsPreOrder() {
    let result = [];

    let collectElem = function(node) {
      result.push(node.value);

      if (node.left) collectElem(node.left);

      if (node.right) collectElem(node.right);
    };

    collectElem(this.root);

    console.log("The DFS -pre order- is: ", ...result);
    return result;
  }

  dfsPosOrder() {
    let result = [];

    let collectElem = function(node) {
      if (node.left) collectElem(node.left);

      if (node.right) collectElem(node.right);

      result.push(node.value);
    };

    collectElem(this.root);

    console.log("The DFS -post order- is: ", ...result);
    return result;
  }

  //Breadth First Search - BFS

  bfs() {
    let result = [];
    let queue = [];

    queue.push(this.root);

    while (queue.length) {
      let current = queue.shift();
      result.push(current.value);

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }

    console.log("The Breadth First Search - BFS order - is: ", ...result);
    return result;
  }
}

const bst = new BST(15);

// bst.size();
bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

bst.size();

// bst.min();
// bst.max();

// bst.contains(3);

bst.dfsInOrder();
bst.dfsPreOrder();
bst.dfsPosOrder();

bst.bfs();
