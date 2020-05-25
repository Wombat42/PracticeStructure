export default class LinkList {
  constructor(items) {
    this.head = null;
    this.tail = null;
    if (items) {
      items.forEach(item => this.add(item));
    }
  }

  add(item) {
    const node = new Node(item);
    if (!this.head) {
      this.tail = this.head = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  reverse(size) {
    const startNode = this.head;
    this.head = null;
    this.rev(size, startNode);
  }

  rev(size, node) {
    let current = node;
    let prev = null;
    let next = null;
    let count = 0;
    let tail = null;
    while (count < size && current) {
      if (!tail) {
        tail = current;
      }
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      count++;
    }
    if (!this.head) {
      this.head = prev;
    }
    if (next) {
      let innerHead = this.rev(size, next);
      tail.next = innerHead;
    }

    return prev;
  }

  toString() {
    let pointer = this.head;
    let result = "[";
    let counter = 0;
    while (pointer && counter < 20) {
      counter++;
      result = `${result}${pointer.val},`;
      pointer = pointer.next;
    }
    result = result.substr(0, result.length - 1);
    result += "]";
    return result;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
