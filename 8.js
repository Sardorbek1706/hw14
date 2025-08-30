class Box {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  getVolume() {
    return this.length * this.width * this.height;
  }
}

function totalVolume(...boxes) {
  return boxes.reduce((sum, b) => sum + b.getVolume(), 0);
}
const b1 = new Box(2,3,4);
const b2 = new Box(1,1,10);
console.log("b1 hajmi:", b1.getVolume());
console.log("b2 hajmi:", b2.getVolume());
console.log("Umumiy hajm:", totalVolume(b1, b2));
