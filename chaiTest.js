//An example of Chai Tests. 

var expect = require('chai').expect;
var convertRomanNumerals = require('../convertRomanNumerals').convertRomanNumerals;
console.log(convertRomanNumerals);

describe("romanNumerals", function() {
    it("should return the proper value for single character inputs", function(){
        expect(convertRomanNumerals('i')).to.equal(1);
        expect(convertRomanNumerals('v')).to.equal(5);
        expect(convertRomanNumerals('x')).to.equal(10);
        expect(convertRomanNumerals('l')).to.equal(50);
        expect(convertRomanNumerals('c')).to.equal(100);

        expect(convertRomanNumerals('I')).to.equal(1);
        expect(convertRomanNumerals('V')).to.equal(5);
        expect(convertRomanNumerals('X')).to.equal(10);
        expect(convertRomanNumerals('L')).to.equal(50);
        expect(convertRomanNumerals('C')).to.equal(100);
    });

    it("should throw an error for non-string input", function() {
        var bcr = convertRomanNumerals.bind(null, 123);
        expect(bcr).to.throw(TypeError);

        bcr = convertRomanNumerals.bind(null, {});
        expect(bcr).to.throw(TypeError);

        bcr = convertRomanNumerals.bind(null, null);
        expect(bcr).to.throw(TypeError);

        bcr = convertRomanNumerals.bind(null, true);
        expect(bcr).to.throw(TypeError);
    });

    it("should properly sum roman numerals which are ordered greatest to least in a case insenitive way.", function() {
        expect(convertRomanNumerals('III')).to.equal(3);
        expect(convertRomanNumerals('VI')).to.equal(6);
        expect(convertRomanNumerals('xvi')).to.equal(16);
        expect(convertRomanNumerals('cc')).to.equal(200);
        expect(convertRomanNumerals('cL')).to.equal(150);
    });

    it('should properly sum roman numerals where a subtraction must occur', function() {
        expect(convertRomanNumerals('iv')).to.equal(4);
        expect(convertRomanNumerals('Lc')).to.equal(50);
        expect(convertRomanNumerals('xc')).to.equal(90);
        expect(convertRomanNumerals('XL')).to.equal(40);
        expect(convertRomanNumerals('cclix')).to.equal(259);
    })
});







