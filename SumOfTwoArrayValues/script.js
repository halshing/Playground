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

var hasSum = (a, sum) => {
   var diffs = [];
   for (var i = 0; i < a.length; i++) {
      var d = diffs.indexOf(a[i]);
      if (d > -1)
         return [a[d], a[i]];
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