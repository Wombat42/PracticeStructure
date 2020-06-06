class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export default class LinkedList {
  constructor(...elements) {
    this.head = null;
    this.tail = null;
    this.add(...elements);
  }

  add(...elements) {
    elements.forEach(element => {
      const node = new Node(element);
      if (!this.head) {
        this.tail = this.head = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
    });
  }

  oldgroup(k) {
    let counter = 0;
    let result = [];
    let tmp = [];
    let current = this.head;
    while (counter < 10 && current) {
      tmp.push(current);
      current = current.next;
      if ((counter + 1) % k === 0) {
        result.push(tmp);
        tmp = [];
      }
      counter++;
    }
    result.push(tmp);
    console.log("f");

    this.head = this.tail = null;
    result.forEach(array => {
      for (let index = array.length - 1; index >= 0; index--) {
        this.add(array[index].val);
      }
    });
  }

  getBatch(head, k) {
    let current = head;
    let tail = current;
    let prev = null;
    while (current && k) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      k--;
    }
    console.log(prev, tail, current);
    return [prev, tail, current];
  }

  group(k) {
    let current = this.head;
    this.head = null;
    this.tail = current;
    let counter = 0;
    while (counter < 10 && current) {
      let [newHead, newTail, nextHead] = this.getBatch(current, k);
      if (!this.head) {
        this.head = newHead;
      }
      this.tail.next = newHead;
      this.tail = newTail;
      this.tail.next = null;
      current = nextHead;
      counter++;
    }
  }

  reverse() {
    let counter = 0;
    let current = this.head;
    this.tail = current;
    let prev = null;
    while (current && counter < 10) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      counter++;
    }
    this.head = prev;
  }

  toString() {
    let results = "[";
    let node = this.head;
    let counter = 0;
    while (node && counter < 10) {
      results += `${node.val},`;
      node = node.next;
      counter++;
    }
    results = results.substr(0, results.length - 1);
    return (results += "]");
  }
}
