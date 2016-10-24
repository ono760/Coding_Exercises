var pi = Math.PI;

var sphereRadius = 15;

var coneBase = 11;
var coneHeight = 22;

var rectLength = 5;
var rectHeight = 11;
var rectWidth = 467;


var volumeOfSphere = function() {

    var volOfSphere = (4 / 3) * pi * (sphereRadius * sphereRadius * sphereRadius);
    return volOfSphere;

};

var volSphere = volumeOfSphere();



var volumeOfCone = function() {


    var coneRadius = (coneBase / 2);
    var volCone = pi * (coneRadius * coneRadius) * (coneHeight / 3);
    return volCone;

};
var volOfCone = volumeOfCone();




var volumeOfRecPrism = function() {

    var volPrism = rectLength * rectHeight * rectWidth;
    return volPrism;

};

var volPrism = volumeOfRecPrism();

console.log("");
console.log("The sphere volume is " + volSphere);
console.log("The cone volume is " + volOfCone);
console.log("The rectangular Prism volume is " + volPrism);
console.log("");


if (volSphere <= volOfCone) {
    console.log("Sphere volume fits inside cone!");
} else if (volSphere >= volOfCone) {
    console.log("Sphere volume doesn't fit inside cone.");
}

if (volOfCone <= volPrism) {
    console.log("The cone volume fits inside prism!");
} else if (volOfCone >= volPrism) {
    console.log("The cone doens't fit inside prism.");
};
