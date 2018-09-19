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
      if (swapRules.hasOwnProperty(item)) {
        return (item = swapRules[item]);
      }
      return item;
    })
    .join('');
};

exports.l337 = l337;
