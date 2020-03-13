// definig the class for each of the nodes from the list
class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }
}

// defining the class for the list
class LinkedList {
  constructor() {
    // initializing last and first nodes in the list
    this.head = this.tail = null;
  }

  // insert value at the beginning of the list
  append(value) {
    // if the list is empty
    if (!this.tail) {
      this.head = this.tail = new Node(value);
      // if there is one or more elements in the list
    } else {
      // keeping the previous "last" value in a variable
      let oldTail = this.tail;
      // assigning the new value node to the tail
      this.tail = new Node(value);
      // assigning the "next" node to the previous "last" value variable
      oldTail.next = this.tail;
      // assigning the "prev" node to the new "last" value
      this.tail.prev = oldTail;
    }
    // console.log(this.tail);
  }

  prepend(value) {
    if (!this.head) {
      this.head = this.tail = new Node(value);
    } else {
      let oldHead = this.head;
      this.head = new Node(value);
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
    // console.log(this.head);
  }

  deleteHead() {
    // if the list is empty
    if (!this.head) {
      return null;
      // if the list has one or more nodes
    } else {
      // keeping the removed head in a variable
      let removedHead = this.head;
      // if the list has only one node
      if (this.head === this.tail) {
        this.head = this.tail = null;
        // if the list has more than one node
      } else {
        // assigning the new "head" as the "next" node in the original head
        this.head = this.head.next;
        // initializing the "prev" of the new "head"
        this.head.prev = null;
      }

      // console.log(removedHead.value);
      return removedHead.value;
    }
  }

  deleteTail() {
    if (!this.tail) {
      return null;
    } else {
      let removedTail = this.tail;

      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }

      // console.log(removedTail.value);
      return removedTail.value;
    }
  }

  search(value) {
    let currentNode = this.head;
    // if the list has a "head" or the "next" node is not null
    while (currentNode) {
      // if it finds the value
      if (currentNode.value === value) {
        // console.log(currentNode);
        return currentNode;
      }
      // change value of currenNode to the "next" node
      currentNode = currentNode.next;
    }
    // console.log("value not found");
    return null;
  }

  delete(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        // store the value to be removed to a variable
        let removedValue = currentNode.value;

        // if current node is the original head
        if (currentNode === this.head) {
          // assign the original "next" as the new head
          this.head = this.head.next;
        } else {
          // assign the original "next" as the "next" of the original "prev"
          currentNode.prev.next = currentNode.next;
        }

        // if the current node is the original tail
        if (currentNode === this.tail) {
          // assign the original "prev" as the new tail
          this.tail = this.tail.prev;
        } else {
          // assign the original "prev" as the prev of the original "next"
          currentNode.next.prev = currentNode.prev;
        }

        // console.log("removed value:", removedValue);
        return true;
      }

      // continue to next node in the list
      currentNode = currentNode.next;
    }

    console.log("no value found");
    return false;
  }

  toArray() {
    let currentNode = this.head;
    let array = [];
    // if the list has a "head" or the "next" node is not null
    while (currentNode) {
      // push the value of the node to the array
      array.push(currentNode.value);
      // continue to next node in the list
      currentNode = currentNode.next;
    }
    console.log("Array: ", array);
    return null;
  }
}

const list = new LinkedList();

list.append(1);
list.append(3);
list.append(5);
list.append(7);

list.prepend(-1);

// list.search(5);

// list.search(77);

// list.deleteHead();
// list.deleteTail();
// console.log(list);
// list.delete(65);
list.delete(5);
// list.delete(3);
console.log(list);

// list.toArray();
