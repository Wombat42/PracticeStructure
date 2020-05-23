export default class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  visit(visitor) {
    let counter = 1;
    if (this.left) {
      counter += this.left.visit(visitor);
    }
    visitor(this.val);
    if (this.right) {
      counter += this.right.visit(visitor);
    }
    return counter;
  }

  findVal(val, stack = []) {
    stack.push(this);
    if (val === this.val) {
      return stack;
    }

    if (this.left) {
      let resLeft = this.left.findVal(val, stack);
      if (resLeft) return resLeft;
    }

    if (this.right) {
      let resRight = this.right.findVal(val, stack);
      if (resRight) return resRight;
    }
    stack.pop();
    return null;
  }

  findLCA(val1, val2) {
    let v1Res = this.findVal(val1);
    let v2Res = this.findVal(val2);
    if (!v1Res || !v1Res) {
      return null;
    }
    let v1 = v1Res.pop();
    let v2 = v2Res.pop();
    while (v1Res.length !== v2Res.length) {
      if (v1Res.length > v2Res.length) {
        v1 = v1Res.pop();
      } else {
        v2 = v2Res.pop();
      }
    }
    while (v1 && v2) {
      v1 = v1Res.length ? v1Res.pop() : v1;
      v2 = v2Res.length ? v2Res.pop() : v2;
      if (v1.val === v2.val) {
        return v1.val;
      }
    }
    return null;
  }
}
