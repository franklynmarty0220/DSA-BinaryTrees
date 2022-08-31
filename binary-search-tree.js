class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    let current = this.root;
    while (true){
      if (val < current.val){
        if (current.left === null){
          current.left = new Node(val);
          return this;
        } else {
          current = current.left;
        }
      }else if (val > current.val) {
        if(current.right === null){
          current.right = new Node(val);
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if(val < current.val){
      if(current.left === null){
        current.left = new Node(val);
        return this;
      }
      return this. insertRecursively(val, current.left);
    } else {
      if(current.right === null){
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currNode = this.root;
    let sought = false;

    if (val === currNode.val) return currNode;

    while (currNode && !sought){
      if(val < currNode.val){
        currNode = currNode.left;
      } else if (val > currNode.val){
        currNode = currNode.right;
      } else {
        sought = true;
      }
    }

    if(!sought) return undefined;
    return currNode;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (this.root === null) return undefined;

    if(val < current.val){
      if(current.left === null) return undefined;
      return this.findRecursively(val, current.left);
    } else if (val > current.val){
      if (current.right === null) return undefined;
      return this.findRecursively(val, current.right);
    }

    return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let data = [];
    let current = this.root;

    function traversePre(node){
      data.push(node.value);
      node.left && traversePre(node.left);
      node.right && traversePre(node.right);
    }

    traversePre(current);
    return data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let data = [];
    let current = this.root;
    function traverseIn(node){
      
      node.left && traversePre(node.left);
      data.push(node.value);
      node.right && traversePre(node.right);
    }

    traverseIn(current);
    return data;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = [];
    let current = this.root;
    function traverseIn(node){

      node.left && traversePre(node.left);
      node.right && traversePre(node.right);
      data.push(node.value);
    }
    traverseIn(current);
    return data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if(node.left){
        queue.push(node.left);

      }
      if(node.right){ 
        queue.push(node.right);
      }
    }

    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
