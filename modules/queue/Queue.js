class _NodeQueue {
  constructor(value) {
      this.value = value;
      this.next = null;
  } 
}
class Queue {
  constructor() {
    // Set initial data.
    this.first =null;
    this.last=null;
  }

  enqueue(data) {
    // Add some data to the queue.
    const newNode = new _NodeQueue(data)
    if(this.first === null) {
        this.first = newNode;
    }
    if(this.last) {
        this.last.next = newNode;
    }

    this.last = newNode
    
  }

  dequeue() {
    // Remove some data from the queue.
  if (this.first === null) {
    return;
  }
  const node = this.first;
  this.first = this.first.next;
  if (node === this.last) {
    this.last = null;
  }
  return node.value
  }

  show() {
    // Return the next item in the queue.
    return this.first.value;
  }

  all() {
    // Return all items in the queue.
    const temp =this.head;
    const arr =[];
    while(temp){
      temp=temp.next;
      arr.push(temp.value)
    }
  }
}

module.exports = Queue;
