export default class Matrix {
  constructor(...elements) {
    this.elements = elements;
    this.size = Math.sqrt(this.elements.length);
    if (this.size % 1 !== 0) {
      throw new Error(
        "elements is not square. Only a square matrix is supported"
      );
    }
  }

  rotateRight() {
    let tmpArray = [];
    let targetColumn = this.size;

    this.elements.forEach((element, index) => {
      const row = Math.floor(index / this.size);
      let position = targetColumn;
      tmpArray[position - 1] = element;
      targetColumn += this.size;
      if ((index + 1) % this.size === 0) {
        targetColumn = this.size - (row + 1);
      }
    });
    this.elements = tmpArray;
  }

  rotateLeft() {
    let tmpArray = [];
    let targetColumn = this.size * this.size - (this.size - 1);

    this.elements.forEach((element, index) => {
      const row = Math.floor(index / this.size) + 1;
      let position = targetColumn;
      tmpArray[position - 1] = element;
      targetColumn -= this.size;
      if ((index + 1) % this.size === 0) {
        targetColumn = this.size * this.size - (this.size - (row + 1));
      }
      this.elements = tmpArray;
    });
  }

  toString(val) {
    const results = (val ? val : this.elements)
      .map(
        (element, index) =>
          `${element}${(index + 1) % this.size === 0 ? "\n" : " "}`
      )
      .join("");
    return results;
  }
}
