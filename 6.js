class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}
const c1 = new Circle(5);
console.log("Yuza:", c1.getArea());
console.log("Perimetri:", c1.getPerimeter());
