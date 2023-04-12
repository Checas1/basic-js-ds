const { NotImplementedError } = require("../extensions/index.js")
const { Node } = require("../extensions/list-tree.js")

class BinarySearchTree {
  constructor() {
    this.branch = null
  }

  root() {
    let tmp = this.branch
    return tmp
  }

  add(data) {
    function addThreeSheet(tmp, data) {
      if (!tmp) return new Node(data)
      if (tmp.value == data) return tmp
      data > tmp.data ?
        tmp.right = addThreeSheet(tmp.right, data) :
          tmp.left = addThreeSheet(tmp.left, data)
      return tmp
    }
    this.branch = addThreeSheet(this.branch, data)
  }

  has(data) {
    function branchSeek(tmp, data) {
      if (!tmp) return false
      if (tmp.data == data) return true
      if (data > tmp.data){
        return branchSeek(tmp.right, data)
      }else{
        return branchSeek(tmp.left, data)
      }
    }
    let func = branchSeek(this.branch, data)
    return func
  }

  find(data) {
    function branchSeek(tmp, data) {
      if (!tmp) return null
      if (tmp.data === data) return tmp
      if (data > tmp.data){
        return branchSeek(tmp.right, data)
      }else{
        return branchSeek(tmp.left, data)
      }
    }
    let func = branchSeek(this.branch, data)
    return func
  }

  remove(data) {
    function branchDelete(tmp, data) {
      if (!tmp) return null
      if (tmp.data > data){
        tmp.left = branchDelete(tmp.left, data)
        return tmp
      }else if (data > tmp.data){
        tmp.right = branchDelete(tmp.right, data)
        return tmp
      } else {
        let notRight = !tmp.right
        let notLeft = !tmp.left
        let minSheet = tmp.left
        
        if (notRight) {
          tmp = tmp.left
          return tmp;
        }
        if (notLeft) {
          tmp = tmp.right
          return tmp
        }
        if (notRight && notLeft) return null

        while (minSheet.right) {
          minSheet = minSheet.right
        }
        tmp.data = minSheet.data
        tmp.left = branchDelete(tmp.left, minSheet.data)
        return tmp
      }
    }
    this.branch = branchDelete(this.branch, data);
  }

  min() {
    let minSheet = this.branch
    while (minSheet.left) {
      minSheet = minSheet.left
    }
    let tmp = minSheet.data
    return tmp
  }

  max() {
    let maxSheet = this.branch;
    while (maxSheet.right) {
      maxSheet = maxSheet.right
    }
    let tmp = maxSheet.data
    return tmp
  }
}

module.exports = {
  BinarySearchTree,
};
