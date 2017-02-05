# ArrayOfObjectsFilter
## Usage

``` javascript
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
// Result
/*
  [
    { ID: 2, Name: "Pauline", Color: "Green", Location: "Up" },
    { ID: 6, Name: "Gus", Color: "Green", Location: "Up" },
    { ID: 10, Name: "Big Daddy", Color: "Green", Location: "Down" }
  ]
*/
```
