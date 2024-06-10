
// Problem 4

// Define a base class Shape with a method draw. Create two subclasses Circle and Rectangle that override
// the draw method. Demonstrate polymorphism using instances of these classes.

class Shape {
    draw() {
        console.log("Drawing a generic shape...");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing a circle...");
    }
}
class Rectangle extends Shape {
    draw() {
        console.log("Drawing a rectangle...");
    }
}

const circleInstance = new Circle();
circleInstance.draw(); // Output: "Drawing a circle..."
