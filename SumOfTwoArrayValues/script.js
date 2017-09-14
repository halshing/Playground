var rand = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min;
}
var getRandom = (len, min, max) => {
      var arr = [];
      for (var i = 0; i < len; i++) {
            arr.push(rand(min, max))
      }
      return arr;
}

// The idea here for improved efficency is, for each value, get
// the difference between the target sum and that value and check if
// we have already "seen" the current value's difference
// i.e. arr = [3,1,5,2] and sum = 8
// would have a diff array of [5,7,3,6]
// So, 3 would have a difference of 5, so store 5
// 1 has a difference of 7, so store 7
// 5 now already exists in the difference array, so that means that the current
// value, 5, plus the value at the same value at index in the original array, 3,
// adds up to the target sum
var hasSum = (a, sum) => {
      // Store the differences value
      var diffs = [];
      // Loop through each index in the array (notice there is only one loop!)
      for (var i = 0; i < a.length; i++) {
            // Get the index of the current value in the differences array
            var d = diffs.indexOf(a[i]);
            // Check if we have seen the difference
            if (d > -1)
                  return [a[d], a[i]]; // We have! So give us the two numbers that add up to the sum
            // We haven't found a match yet, so let's get the difference between the sum and the current value
            diffs.push(sum - a[i]);
      }
      return null;
};
var init = _ => {
      var count = 0,
            sum = 4,
            len = 10,
            min = 1,
            max = 100,
            tries = 10,
            arr,
            keepGoing = true;

      while (keepGoing) {
            count++;
            arr = getRandom(len, min, max);
            var x = hasSum(arr, sum);
            if (x)
                  return [count, x];
            if (count >= tries)
                  keepGoing = false;
      }
      return `No matches found after ${tries} tries!`;

};
var app = init();
console.log(app);