//Bind returns a function with an explicit this
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
    }
};

var line2 = { x1: 25, y1: 25, x2: 50, y2: 200 };
var getLine2Slope = line.getSlope.bind(line2);
console.log(getLine2Slope()); //7
