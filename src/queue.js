const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.startArg = null
    this.endArg = null
  }

  getUnderlyingList() {
    let tmp = this.startArg
    return tmp
  }

  enqueue(value) {
    let protoNodeList = new ListNode(value)
    if(this.startArg == null) {
      this.startArg = protoNodeList
      this.endArg = this.startArg
    }else{
      this.endArg.next = protoNodeList
      this.endArg = this.endArg.next
    }
  }

  dequeue() {
    let tmp = this.startArg
    let result = tmp.value
    this.startArg = tmp.next
    return result
  }
}

module.exports = {
  Queue,
};