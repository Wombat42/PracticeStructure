class ListNode {
  constructor(val) {
    this.next = null;
    this.prev = null;
    this.val = val;
  }
}

export default class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(val) {
    const node = new ListNode(val);
    if (!this.head) {
      this.head = node;
    } else if (!this.tail) {
      this.tail = node;
      this.head.next = node;
      this.tail.prev = this.head;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }

  toString() {
    let temp = this.head;
    let result = "[";
    while (temp !== null) {
      result = `${result} ${temp.val},`;
      temp = temp.next;
    }
    result = result.substr(0, result.length - 1) + " ]";
    return result;
  }
}
