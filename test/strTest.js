var chai = require("chai");
var BigInt = require("../src/BigInt");

var expect = chai.expect;

describe("str2bigInt", function() {
    it("should process uppercase hexes with numeral base", function() {
        expect(BigInt.str2bigInt('C', 16)).to.deep.equal([12, 0]);
        expect(BigInt.str2bigInt('C', 16, 5)).to.deep.equal([12, 0, 0, 0, 0]);
    });

    it("should process lowercase hexes with numeral base", function() {
        expect(BigInt.str2bigInt('c', 16)).to.deep.equal([12, 0]);
        expect(BigInt.str2bigInt('c', 16, 5)).to.deep.equal([12, 0, 0, 0, 0]);
    });
})