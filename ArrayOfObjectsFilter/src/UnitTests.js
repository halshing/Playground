(function () {
    "use strict";
    
    var myReporter = {
        specDone: function (result) {
            console.log(result);
            // Write results to SharePoint
        }
    };

    jasmine.getEnv().addReporter(myReporter);


    describe("Data Filter", function () {

        // Test Case 1
        it(dataResult.TestCase1.Description, function () {
            //expect(filterData(dataResult.TestCase1.Filters)).toEqual(dataResult.TestCase1.ExpectedData.sort(function (a, b) { return a.ID - b.ID; }));
            expect(filterData(dataResult.TestCase1.Filters)).toEqual(false);
        });

        // Test Case 2
        it(dataResult.TestCase2.Description, function () {
            expect(filterData(dataResult.TestCase2.Filters)).toEqual(dataResult.TestCase2.ExpectedData.sort(function (a, b) { return a.ID - b.ID; }));
        });

        // Test Case 3
        it(dataResult.TestCase3.Description, function () {
            expect(filterData(dataResult.TestCase3.Filters)).toEqual(dataResult.TestCase3.ExpectedData.sort(function (a, b) { return a.ID - b.ID; }));
        });

        // Test Case 4
        it(dataResult.TestCase4.Description, function () {
            expect(filterData(dataResult.TestCase4.Filters)).toEqual(dataResult.TestCase4.ExpectedData.sort(function (a, b) { return a.ID - b.ID; }));
        });

    });

} ());

