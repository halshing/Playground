"use strict";

function stringRearrange(inputArray) {
  // Determine if two strings can be next to each other
  var isValid = function (str, compare) {
    var changes = [];
    for (var i = 0; i < str.length; i++) {
      if (str[i] != compare[i]) {
        changes.push(true);
      }
    }
    // Return TRUE if there is only a one character difference
    // This means that these two strings can be next to each other in the path
    return changes.length == 1;
  }
  // Determine what the next point in a valid path should be
  var checkConnection = function (str, tracker) {
    var flag = true;
    // We need to check the connecting string against
    // all the strings in the original array
    for (var i = 0; i < inputArray.length; i++) {
      // See if the current point already has a valid connection
      // If so, then move to the next string to compare it
      if (tracker.indexOf(i) > -1)
        continue;
      // See if there is a valid connection
      // If so, then let's add the current position to the tracker
      // and check for another connection using the current string
      if (isValid(str, inputArray[i])) {
        // The tracker stores the index of the connecting string
        // This is important in cases where there are multiple
        // identical strings in an array
        tracker.push(i);
        // Let's check the next connection from the current string
        checkConnection(inputArray[i], tracker);
        // After the recursive checks happen, check
        // if at any point the tracker is the same length
        // as the input array. If it is, that means
        // tracker is a Hamiltonian Path!
        if (tracker.length == inputArray.length) {
          return true;
        }
      } else {
        // The string and its neighbor can't be next to each other
        // so let's update our flag 
        flag = false;
        continue;
      }
    }
    // Let's check if the two strings can be next to other
    // If they can't, then remove the last index from the tracker
    if (!flag) tracker.pop();
    // This path is not valid
    return false;
  }
  // Start the checks
  // This will attempt to go through each string combination starting
  // with each string in the input array.
  for (var i = 0; i < inputArray.length; i++) {
    // Let's see if there is a valid combination of strings starting
    // with the current string in the input array. If there is, the
    // current combination of strings is a Hamiltonian Path!
    if (checkConnection(inputArray[i], [i])) {
      return true;
    }
  }
  // No combination of strings exists that meets the criteria
  return false;
}