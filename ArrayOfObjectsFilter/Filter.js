"use strict";
Array.prototype.flexFilter = function(info) {
  
  // Set our variables
  var matchesFilter, matches = [], count;
  
  // Helper function to loop through the filter criteria to find matching values
  // Each filter criteria is treated as "AND". So each item must match all the filter criteria to be considered a match.
  // Multiple filter values in a filter field are treated as "OR" i.e. ["Blue", "Green"] will yield items matching a value of Blue OR Green.
  matchesFilter = function(item) {
    count = 0
    for (var n = 0; n < info.length; n++) {
      if (info[n]["Values"].indexOf(item[info[n]["Field"]]) > -1) {
        count++;
      }
    }
    // If TRUE, then the current item in the array meets all the filter criteria
    return count == info.length;
  }

  // Loop through each item in the array
  for (var i = 0; i < this.length; i++) {
    // Determine if the current item matches the filter criteria
    if (matchesFilter(this[i])) {
      matches.push(this[i]);
    }
  }

  // Give us a new array containing the objects matching the filter criteria
  return matches;
}

var data = [
  { ID: 1, Name: "John", Color: "Blue", Location: "Up" },
  { ID: 2, Name: "Pauline", Color: "Green", Location: "Up" },
  { ID: 3, Name: "Ahmed", Color: "Orange", Location: "Left" },
  { ID: 4, Name: "Diego", Color: "Pink", Location: "Up" },
  { ID: 5, Name: "Maria", Color: "Black", Location: "Down" },
  { ID: 6, Name: "Gus", Color: "Green", Location: "Up" },
  { ID: 7, Name: "Brian", Color: "Pink", Location: "Left" },
  { ID: 8, Name: "Shelley", Color: "Green", Location: "Right" },
  { ID: 9, Name: "Leonardo", Color: "Blue", Location: "Right" },
  { ID: 10, Name: "Big Daddy", Color: "Green", Location: "Down" }
];

var criteria = [
  { Field: "Color", Values: ["Green"] },
  { Field: "Location", Values: ["Up", "Down"] }
];
var filtered = data.flexFilter(criteria);
console.log(filtered);