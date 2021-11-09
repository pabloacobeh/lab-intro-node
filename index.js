class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length += 1;
    return this.items.sort((a, b) => {
      return a - b;
    });
  }

  get(pos) {
    if (this.items.indexOf(pos) in this.items) {
      return this.items.indexOf(pos);
    }
    throw new Error("OutOfBounds");
  }

  max() {
    if (this.items[this.items.length - 1]) {
      return this.items[this.items.length - 1];
    }
    throw new Error("EmptySortedList");
  }

  min() {
    if (this.items[0]) {
      return this.items[0];
    }
    throw new Error("EmptySortedList");
  }

  sum() {
    return this.items.reduce((a, b) => {
      return a + b;
    }, 0);
  }

  avg() {
    if (this.sum() / this.length) {
      return this.sum() / this.length;
    }
    throw new Error("EmptySortedList");
  }
}

module.exports = SortedList;
