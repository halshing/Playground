const { sampleData, keyMap } = require("./data");

// data with renamed keys
let data = Object.keys(sampleData).reduce((obj, key) => {
  // only rename what matches the key mapper, otherwise give us what we have
  let k = keyMap[key] || key;

  // rename and set value
  obj[k] = sampleData[key];

  // return the updated object with the new key
  return obj;
}, {});

console.log(data);
