// Description

// Harshad numbers are positive numbers that can be divided (without remainder) by the sum of their digits.

// For example, the following numbers are Harshad numbers:

// 10, because 1 + 0 = 1 and 10 equals 1 * 10
// 27, because 2 + 7 = 9 and 27 equals 9 * 3
// 588, because 5 + 8 + 8 = 21 and 588 equals 21 * 28
// While those numbers are not:

// 19, because 1 + 9 = 10 and 19 is not divisible by 10
// 589, because 5 + 8 + 9 = 22 and 589 is not divisible by 22
// 1001, because 1 + 1 = 2 and 1001 is not divisible by 2
// Harshad numbers can be found in any number base, but we are going to focus on base 10 exclusively.

// Your task is to complete the skeleton Harshad object ("static class") which has 3 functions.

/**
 * Utility class for Harshad numbers (also called Niven numbers).
 *
 * @namespace Harshad
 */
var Harshad = (function() {
    'use strict';

    return {
        /**
         * Returns true when the given number is a valid Harshad number.
         *
         * @param {Number} number The given number
         * @returns {Boolean}
         * @function Harshad.isValid
         */
        isValid: function(num) {
            var arr = num.toString().split("");
            var arrayOf=[];

            var addedNums = arr.map(function(num) {
                return parseInt(num)
            }).reduce(function(a, b) {
                return a + b
            }, 0)

            // for (var i = 1; i <= num; i++) {
            //     if (addedNums * i === num) {
            //         return true
            //     }
            // }

            if (num % addedNums !== 0) {

                return false;
            }

            return true;
        },
        /**
         * Gets the next Harshad number after the given number.
         *
         * @param {Number} number The given number
         * @returns {Number}
         * @function Harshad.getNext
         */
        getNext: function(start) {
            // Your implementation goes here

            var foundNum = false;
            var currentNum = start + 1
            while (foundNum === false) {
                foundNum = this.isValid(currentNum);
                if (foundNum === true) {
                    currentNum = true;
                    return currentNum
                }
                currentNum++
            };
            return foundNum;
        },
        /**
         * Returns the suite of Harshad numbers, starting after a given number.
         *
         * @param {Number} count The number of elements to return
         * @param {Number} start The number after which the serie should start;
         *  defaults to 0
         * @returns {Array}
         * @function Harshad.getSerie
         */
        getSerie: function(findNum, startNum) {
            var foundArr = [];
            if (!startNum) {
                startNum = 1;
            }

            if(!findNum){
                findNum = startNum + 1
            }

             var nextNum = startNum + 1;
            while (foundArr.length < findNum) {
                if (this.isValid(nextNum)){
                    foundArr.push(nextNum);
                }
                nextNum++
            }
            return foundArr;
        }

    }

}());

