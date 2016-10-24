"use strict";
const NUMERAL_LOOKUP = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100
}

function convertRomanNumerals(numerals) {
    if (typeof numerals !== 'string') {
        throw new TypeError("Invalid input, numerals must be a string");
    }

    numerals = numerals.toLowerCase();

    var sum = 0;
    for (let i = 0; i < numerals.length; i++) {
        let currentNumeral = numerals[i];
        let nextNumeral = numerals[i + 1];

        let currentVal = NUMERAL_LOOKUP[currentNumeral];
        let nextVal = NUMERAL_LOOKUP[nextNumeral];
        console.log(currentVal);

        if (currentVal >= nextVal || nextNumeral === undefined) {
            sum += currentVal;
        } else {
            sum -= currentVal;
        }
    }

    return sum;
}

console.log(convertRomanNumerals("ivxlhhgfddcccc"))

