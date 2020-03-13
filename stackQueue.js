class StackArr {
  constructor() {
    this.stack = [];
  }

  push(elem) {
    this.stack.push(elem);
    console.log(this.stack);
  }

  pop() {
    if (this.empty()) {
      console.log("The stack is empty!");
    } else {
      let removed = this.stack[this.stack.length - 1];
      this.stack.pop();
      console.log("removed element:", removed);
      console.log("Stack: ", this.stack);
    }
  }

  peek() {
    if (this.empty()) {
      console.log("The stack is empty!");
    } else {
      console.log("last element: ", this.stack[this.stack.length - 1]);
    }
  }

  empty() {
    return !this.stack.length;
  }
}

let stack1 = new StackArr();

// stack1.push(1);
// stack1.push(3);
// stack1.push(5);

// stack1.pop();
// console.log(stack1);

// stack1.peek();

// stack1.push(777);
// stack1.push("abc");
// stack1.pop();

// stack1.peek();

// stack1.pop();
// stack1.pop();
// stack1.pop();
// stack1.pop();
// stack1.pop();
// stack1.peek();

class StackObj {
  constructor() {
    this.stack = {};
    this.size = 0;
  }

  push(elem) {
    this.size++;
    this.stack[this.size] = elem;
    console.log("Stack:", this.stack);
  }

  pop() {
    if (this.size) {
      let removed = this.stack[this.size];
      delete this.stack[this.size];
      this.size--;
      console.log("element removed: ", removed);
      console.log("Stack:", this.stack);
    } else {
      console.log("Stack is empty!");
    }
  }

  peek() {
    if (this.size) {
      console.log("last stack element: ", this.stack[this.size]);
    } else {
      console.log("Stack is empty!");
    }
  }
}

// let stack2 = new StackObj();
// stack2.push(11);
// stack2.push(88);
// stack2.pop();
// stack2.peek();
// stack2.push(33);
// stack2.peek();
// stack2.pop();
// stack2.pop();
// stack2.pop();

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class StackList {
  constructor() {
    this.head = null;
  }

  push(elem) {
    let current = new Node(elem);

    if (!this.head) {
      this.head = current;
    } else {
      current.next = this.head;
      this.head = current;
    }
    console.log("the stack so far: ", this.head);
  }

  pop() {
    if (!this.head) {
      console.log("The stack is empty!");
    } else {
      let removed = this.head.value;
      this.head = this.head.next;
      console.log("The value removed is: ", removed);
      if (this.head) {
        console.log("The new stack: ", this.head);
      }
    }
  }

  peek() {
    if (this.head) {
      console.log("The LiFo value is", this.head.value);
    } else {
      console.log("The stack is empty!");
    }
  }
}

// let stack3 = new StackList();

// stack3.push(33);
// stack3.push(44);
// stack3.push(55);

// stack3.pop();
// stack3.pop();
// stack3.pop();

// stack3.peek();
// stack3.push(77);
// stack3.peek();

class QueueArr {
  constructor() {
    this.queue = [];
  }

  push(elem) {
    this.queue.push(elem);
    console.log("The queue so far", this.queue);
  }

  shift() {
    if (this.queue.length) {
      let removed = this.queue.shift();
      console.log("the element removed is", removed);
      console.log("The new queue is", this.queue);
    } else {
      console.log("The queue is empty!");
    }
  }

  peek() {
    if (this.queue.length) {
      console.log("The FiFo element is: ", this.queue[0]);
    } else {
      console.log("The queue is empty!");
    }
  }
}

// let stack4 = new QueueArr();
// stack4.push(1);
// stack4.push(2);
// stack4.push(3);
// stack4.shift();
// stack4.shift();
// stack4.shift();
// stack4.shift();
// stack4.push(1);
// stack4.push(2);
// stack4.push(3);
// stack4.peek();

class QueueObj {
  constructor() {
    this.queue = {};
    this.size = 0;
    this.noSize = 1;
  }

  push(elem) {
    this.size++;
    this.queue[this.size] = elem;
    console.log("The queue so far:", this.queue);
  }

  shift() {
    if (this.size) {
      let removed = this.queue[this.noSize];
      delete this.queue[this.noSize];
      this.noSize++;
      this.size--;
      console.log("element removed is: ", removed);
    } else {
      console.log("The queue is empty!");
    }
  }

  peek() {
    if (this.size) {
      console.log("The FiFo element is", this.queue[this.noSize]);
    } else {
      console.log("The queue is empty!");
    }
  }
}

let stack5 = new QueueObj();
// stack5.push(88);
// stack5.push(2);
// stack5.push(3);
// stack5.peek();
// stack5.shift();
// stack5.shift();
// stack5.shift();
// stack5.shift();
// stack5.push(77);

class NodeQ {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class QueueList {
  constructor() {
    this.head = null;
  }

  push(value) {
    let node = new NodeQ(value);
    if (!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }

  shift() {
    if (this.head) {
      let removed = this.head;
      console.log("element removed", removed);
      this.head = this.head.next;
    } else {
      console.log("The stack is empty!");
    }
  }

  peek() {
    if (this.head) {
      console.log("The FiFo element is: ", this.head.value);
    } else {
      console.log("The stack is empty!");
    }
  }
}

let stack6 = new QueueList();
stack6.push(33);
stack6.push(55);
stack6.shift();
stack6.peek();
