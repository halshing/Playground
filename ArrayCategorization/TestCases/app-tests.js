"use strict";

// Test 1
describe("Test 1", function () {
    it("is valid", function () {
        var x = ["Jack", "Leon", "Maria"];
        var y = [
            ["Computer repair", "Handyman", "House cleaning"],
            ["Computer lessons", "Computer repair", "Data recovery service"],
            ["Computer lessons", "House cleaning"]
        ];
        var output = [
            [["Computer lessons"],["Leon","Maria"]], 
            [["Computer repair"],["Jack","Leon"]], 
            [["Data recovery service"],["Leon"]], 
            [["Handyman"],["Jack"]], 
            [["House cleaning"],["Jack","Maria"]]
        ];
        expect(proCategorization(x, y)).toEqual(output);
    });
});

// Test 2
describe("Test 2", function () {
    it("is valid", function () {
        var x = ["Carlos", "Kendra", "Pauline", "Phil"];
        var y = [
            ["JavaScript", "C#", "Python"],
            ["Python"],
            ["C#", "Python"],
            ["JavaScript", "Java","Ruby", "C#", "Python"]
        ];
        var output = [
            [["C#"],["Carlos", "Pauline", "Phil"]], 
            [["Java"],["Phil"]], 
            [["JavaScript"],["Carlos","Phil"]], 
            [["Python"],["Carlos","Kendra","Pauline","Phil"]], 
            [["Ruby"],["Phil"]]
        ];
        expect(proCategorization(x, y)).toEqual(output);
    });
});

// Test 3
describe("Test 3", function () {
    it("is valid", function () {
        var x = ["a", "b", "c","d"];
        var y = [
            ["a","b"],
            ["b","e"],
            ["e","f","g"],
            ["a","x","y","z"]
        ];
        var output = [
            [["a"],["a","d"]], 
            [["b"],["a","b"]], 
            [["e"],["b","c"]], 
            [["f"],["c"]], 
            [["g"],["c"]],
            [["x"],["d"]],
            [["y"],["d"]],
            [["z"],["d"]]
        ];
        expect(proCategorization(x, y)).toEqual(output);
    });
});

// Test 4
describe("Test 4", function () {
    it("is valid", function () {
        var x = ["a"];
        var y = [
            ["a"]
        ];
        var output = [
            [["a"],["a"]]
        ];
        expect(proCategorization(x, y)).toEqual(output);
    });
});