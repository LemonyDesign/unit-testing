function add(a, b) {
  return a + b;
}

function longestString(array) {
  let longest = "";
  array.forEach(item => {
    if (item.length > longest.length) {
      longest = item;
    }
  });
  return longest;
}

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
    .split("")
    .map(item => {
      return swapRules.hasOwnProperty(item) ? (item = swapRules[item]) : item;
    })
    .join("");
};

// if the i counter is greater than the index of the array (first instance of that item in the array) - it's a duplicate; so filter these out
const uniqueStrings = array => {
  return array.filter((item, i) => {
    return !(i > array.indexOf(item));
  });
};

// Here is the constructor, test with a new instance
function Developer(name, languages) {
  this.name = name;
  this.languages = languages;
}

Developer.prototype.learnLanguage = function(language) {
  this.languages.includes(language)
    ? this.languages
    : this.languages.push(language);
};

const stringsConcat = array =>
  array.filter(item => (typeof item === "string" ? item : false)).join(" ");

const negativeOnly = array =>
  array.filter(number => (number < 0 ? number : false));

const camelise = string => {
  const arr = string.split(" ");

  const capsArr = arr.map(word => {
    firstLetter = word[0].toUpperCase();
    rem = word.slice(1);
    return (word = firstLetter.concat(rem));
  });

  return arr[0].concat(capsArr.slice(1).join(""));
};

const isPrime = number => {
  let arr = [];
  for (let i = 2; i < number; i++) {
    arr.push(i);
  }
  const notPrime = arr.filter(item => number % item === 0);
  return notPrime.length === 0 ? true : false;
};

function Walker(journey) {
  this.journey = [[0, 0]];
}

Walker.prototype.walk = function(direction, number) {
  array = this.journey;

  let last = array[array.length - 1];

  if (direction === "N") {
    this.journey.push([last[0], last[1] + number]);
  }
  if (direction === "S") {
    this.journey.push([last[0], last[1] - number]);
  }
  if (direction === "W") {
    this.journey.push([last[0] - number, last[1]]);
  }
  if (direction === "E") {
    this.journey.push([last[0] + number, last[1]]);
  }

  return this;
};

Walker.prototype.currentLocation = function() {
  array = this.journey;
  return array[array.length - 1];
};

Walker.prototype.pathTaken = function() {
  array = this.journey;
  const itemOutput = array.map(item => {
    const joinItem = item.join(", ");
    return `<li>${joinItem}</li>`;
  });

  const list = itemOutput.join("");

  return `<ul>${list}</ul>`;
};

Walker.prototype.totalSteps = function() {
  const array = this.journey;
  const arrOne = array.reduce((acc, item, i, arr) => {
    // set prev for first in array AS first in array - or it steps back to undefined
    let prev0 = arr[0][0];
    let prev1 = arr[0][1];

    if (i > 1) {
      prev0 = arr[i - 1][0];
      prev1 = arr[i - 1][1];
    }

    acc.push(Math.abs(item[0] - prev0), Math.abs(item[1] - prev1));
    return acc;
  }, []);

  return arrOne.reduce((acc, item) => acc + item, 0);
};

module.exports = {
  add,
  longestString,
  l337,
  uniqueStrings,
  Developer,
  stringsConcat,
  negativeOnly,
  camelise,
  isPrime,
  Walker
};

/*
 *
 * ALTERNATIVES to uniqueStrings
 *
 */

// is it there?
// if it is there - return value
// if it not there yet - create property false value, and test it equals false - which returns true - so it keeps in the array when filtering

// const uniqueStrings = array => {
//   const lookUp = {};
//   return array.filter(item => {
//     return (lookUp.hasOwnProperty(item) ? lookUp[item] : (lookUp[item] = false) === false)
//   });
// };

// const uniqueStrings = array => {
//   const unique = {};
//   return array.filter(item => {
//     return item in unique ? unique[item] : (unique[item] = false) === false;
//   });
// };
