class Circle {
  constructor(radius) {
    this.pi = 3.14;
    this.radius = radius;
  }

  get getCircleRadius() {
    return this.radius;
  }

  get getCircleDiametr() {
    return this.radius * 2;
  }

  set setCircleRadius(newRadius) {
    this.radius = newRadius;
  }

  calculateCircleArea() {
    return (this.pi * (this.radius ** 2)).toFixed(2);
  }

  calculateCircleLength() {
    return (2 * this.pi * this.radius).toFixed(2); 
  }
}

const Circle_ = new Circle(3); // radius - 3 m

console.log(Circle_.getCircleRadius);
console.log(Circle_.getCircleDiametr);
Circle_.setCircleRadius = 5;
console.log(Circle_.getCircleRadius);
console.log(Circle_.getCircleDiametr);
console.log(Circle_.calculateCircleArea());
console.log(Circle_.calculateCircleLength());