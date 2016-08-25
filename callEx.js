//call() allows you to explicitly set this and map the following params onto a function's params. 
//Converting an array-like object (like the keyword arguments) into an array
//Call maps parameters passed after the first one

var line = {
    x1: 0,
    y1: 0,
    x2: 2,
    y2: 2,
    getSlope: function() {
        var rise = this.y2 - this.y1;
        var run = this.x2 - this.x1;
        this.slope = rise / run;
        return this.slope;
    },
    setIntercept: function(intercept) {
        this.intercept = intercept;
    },
    getX: function(y) {
        if (this.slope && this.intercept) {
            if (this.slope && this.intercept) {

                return (this.slope / y) - this.intercept;

            };
        };
    },
    getY: function(x) {
        if (this.slope && this.intercept) {
            return (this.slope * x) + this.intercept;
        };
    }
}; //end of object line

var anotherLine = {
    x1: 3,
    y1: 3,
    x2: 6,
    y2: 12
};

console.log(line.getSlope.call(anotherLine)); //3
console.log(line.setIntercept.call(anotherLine, 3)); //undefined
console.log(line.getY.call(anotherLine, 100)); //303
console.log(anotherLine)
