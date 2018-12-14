// sample data
const sampleData = {
  ["old-key_1"]: "value 1",
  ["old-key_2"]: "value 2",
  ["old-key_3"]: "value 3",
  ["old-key_4"]: "value 4",
  ["old-key_5"]: "value 5",
  ["old-key_6"]: "value 6"
};

// create a key mapper
const keyMap = {
  ["old-key_2"]: "NewKey2",
  ["old-key_4"]: "NewKey4",
  ["old-key_6"]: "NewKey6"
};

module.exports = {
  sampleData,
  keyMap
};
