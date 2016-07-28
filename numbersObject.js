var numbersObj = {

    numberOne: 2,
    numberTwo: 4,
    numberThree: 20,
    numberFour: -7
};


for (var key in numbersObj) {
    console.log(numbersObj[key]);
};


console.log(" ");
console.log(numbersObj["numberThree"]); //outputs specific one
