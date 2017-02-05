"use strict";
Array.prototype.flexFilter = function(info) {
  
  // Set our variables
  var matchesFilter, matches = [], count = 0;
  
  // Helper function to loop through the filter criteria to find matching values
  // Each filter criteria is treated as "AND". So each item must match all the filter criteria to be considered a match.
  // Multiple filter values in a filter field are treated as "OR" i.e. ["Blue", "Green"] will yield items matching a value of Blue OR Green.
  matchesFilter = function(item) {
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