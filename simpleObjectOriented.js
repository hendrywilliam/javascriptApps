class Shape {
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcArea() {
        console.log(this.sides * this.sideLength);
    }
}

const square = new Shape('Square', 4, 5);
const triangle = new Shape('Triangle', 3, 3);

square.calcArea();
triangle.calcArea();