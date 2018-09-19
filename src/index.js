function add(a, b) {
  return a + b;
}

exports.add = add;

function longestString(array) {
  let longest = '';
  array.forEach(item => {
    if (item.length > longest.length) {
      longest = item;
    }
  });
  return longest;
}

exports.longestString = longestString;

const l337 = string => {
  swapRules = {
    i: 1,
    l: 1,
    z: 2,
    e: 3,
    a: 4,
    s: 5,
    g: 6,
    t: 7,
    y: 7,
    b: 8,
    q: 9,
    o: 0
  };

  return string
    .split('')
    .map(item => {
      return swapRules.hasOwnProperty(item) ? item = swapRules[item] : item;
    })
    .join('');
};

exports.l337 = l337;

  // is it there? 
  // if it is there - return value
  // if it not there yet - create property false value, and test it equals false - which returns true - so it keeps in the array when filtering
// const uniqueStrings = array => {
//   const lookUp = {};
//   return array.filter(item => {
//     return (lookUp.hasOwnProperty(item) ? lookUp[item] : (lookUp[item] = false) === false)
//   });
// };

// if the i counter is greater than the index of the array (first instance of that item in the array) - it's a duplicate; so filter these out
const uniqueStrings = array => {
  return array.filter((item, i) => {
    return !(i > array.indexOf(item))
  });
  };

exports.uniqueStrings = uniqueStrings;
