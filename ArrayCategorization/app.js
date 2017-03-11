function proCategorization(pros, preferences) {
   var finalResult = [],
      pro,
      pref,
      flag;
   var doSort = function(a, b) {
      if (a[0][0] < b[0][0]) return -1;
      if (a[0][0] > b[0][0]) return 1;
      return 0;
   };
   for (var n = 0; n < preferences[0].length; n++) {
      finalResult.push([
         [preferences[0][n]],
         [pros[0]]
      ]);
   }
   for (var i = 1; i < pros.length; i++) {
      pro = pros[i];
      pref = preferences[i];
      for (var q = 0; q < pref.length; q++) {
         flag = false;
         for (var x = 0; x < finalResult.length; x++) {
            if (finalResult[x][0].indexOf(pref[q]) >= 0 && finalResult[x][1].indexOf(pro) < 0) {
               finalResult[x][1].push(pro);
               flag = true;
            }
         }
         if (!flag) {
            finalResult.push([
               [pref[q]],
               [pro]
            ]);
         }
      }
   }
   return finalResult.sort(doSort);
}