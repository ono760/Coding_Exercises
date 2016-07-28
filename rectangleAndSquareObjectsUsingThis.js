var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;

rectangle.setHeight = function(newHeight) {
    this.height = newHeight;
};
rectangle.setWidth = function(newWidth) {
    this.width = newWidth;
};

rectangle.setHeight(6);
rectangle.setWidth(8);


var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
    return this.sideLength * 4;
};

square.calcArea = function() {
    return this.sideLength * this.sideLength;

};

var perimeter = square.calcPerimeter();
var area = square.calcArea();
console.log("Square Perimeter: " + perimeter); //24
console.log("Square Area: " + area); //36
