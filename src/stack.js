const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.array = []
  }

  push(result) {
    this.array.push(result)
  }

  pop() {
    return this.array.pop()
  }

  peek() {
    let lastArg = this.array.length - 1
    return this.array[lastArg]
  }
}

module.exports = {
  Stack,
};
