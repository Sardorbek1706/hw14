class WordFinder {
  constructor(words, x) {
    this.words = words;
    this.x = x;
  }
  findIndices() {
    const res = [];
    this.words.forEach((w,i) => {
      if (w.includes(this.x)) res.push(i);
    });
    return res;
  }
}

const wf = new WordFinder(["apple","banana","cherry","date"], "a");
console.log(wf.findIndices());
