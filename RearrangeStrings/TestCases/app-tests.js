"use strict";

// Test 1
describe("[\"bb\", \"aa\", \"ab\"]", function () {
    it("does have a valid combination", function () {
        var inputArray = ["bb", "aa", "ab"];
        expect(stringRearrange(inputArray)).toBe(true);
    });
});

// Test 2
describe("[\"aba\", \"bbb\", \"bab\"]", function () {
    it("does not have a valid combination", function () {
        var inputArray = ["aba", "bbb", "bab"];
        expect(stringRearrange(inputArray)).toBe(false);
    });
});

// Test 3
describe("[\"abc\", \"abx\", \"axx\", \"abc\"]", function () {
    it("does not have a valid combination", function () {
        var inputArray = ["abc", "abx", "axx", "abc"];
        expect(stringRearrange(inputArray)).toBe(false);
    });
});

// Test 4
describe("[\"abc\", \"axx\", \"abc\", \"abx\", \"abx\"]", function () {
    it("does have a valid combination", function () {
        var inputArray = ["abc", "axx", "abc", "abx", "abx"];
        expect(stringRearrange(inputArray)).toBe(true);
    });
});

// Test 5
describe("[\"q\", \"q\"]", function () {
    it("does not have a valid combination", function () {
        var inputArray = ["q", "q"];
        expect(stringRearrange(inputArray)).toBe(false);
    });
});

// Test 6
describe("[\"haaaa\",\"hello\",\"helaa\",\"aaaaa\",\"hella\",\"heaaa\"]", function () {
    it("does have a valid combination", function () {
        var inputArray = ["haaaa","hello","helaa","aaaaa","hella","heaaa"];
        expect(stringRearrange(inputArray)).toBe(true);
    });
});

// Test 7
describe("[\"abc\", \"xbc\", \"xxc\", \"xbc\", \"aby\", \"ayy\", \"aby\"]", function () {
    it("does have a valid combination", function () {
        var inputArray = ["abc", "xbc", "xxc", "xbc", "aby", "ayy", "aby"];
        expect(stringRearrange(inputArray)).toBe(true);
    });
});

// Test 8
describe("[\"g\",\"t\",\"x\",\"g\",\"l\",\"g\",\"x\"]", function () {
    it("does have a valid combination", function () {
        var inputArray = ["g","t","x","g","l","g","x"];
        expect(stringRearrange(inputArray)).toBe(true);
    });
});

// Test 9
describe("[\"00001011\",\"00111011\",\"10001011\",\"00001001\",\"00011001\",\"00010111\",\"10001011\",\"10001001\"]", function () {
    it("does not have a valid combination", function () {
        var inputArray = ["00001011","00111011","10001011","00001001","00011001","00010111","10001011","10001001"];
        expect(stringRearrange(inputArray)).toBe(false);
    });
});

// Test 10
describe("[\"1100\",\"0011\",\"1111\",\"0001\",\"0111\",\"0000\",\"1110\"]", function () {
    it("does have a valid combination", function () {
        var inputArray = ["1100","0011","1111","0001","0111","0000","1110"];
        expect(stringRearrange(inputArray)).toBe(true);
    });
});