"use strict";
// The filterInfo parameter is an array of objects containing the FilterField and FilterValues to filter the data against
// Example filterInfo input:
//  [
//    {
//       FilterField: "State",
//       FilterValues: ["VA"]
//    }
//  ]
function filterData (filterInfo) {
    return dataSource.filter(function(dataRow) {
        var matches = [];
        filterInfo.forEach(function (filter) {
            var match = filter.FilterValues.some(function (filterValue) {
                return filterValue == dataRow[filter.FilterField]
            });
            if (match)
                matches.push(match);            
        });        
        return matches.length == filterInfo.length;
    });
}