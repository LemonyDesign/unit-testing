function add(a, b) {
  return a + b;
}

exports.add = add;

function longestString(array) {
  let longest = "";
  array.forEach(item => {
    
    if (item.length > longest.length) {
      longest = item;
    }
  });
return longest;
};

exports.longestString = longestString;