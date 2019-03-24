const functions = require("../src/index");

test("1. Addition", function() {
  const expected = 5;
  const result = functions.add(2, 3);
  expect(result).toBe(expected);
});

test("2. Longest String", function() {
  const expected = "abcd";
  const result = functions.longestString(["a", "abc", "abcd", "ab", "defg"]);
  expect(result).toBe(expected);
});

test("3. L337", () => {
  const expected = "112345677890";
  const result = functions.l337("ilzeasgtybqo");
  expect(result).toBe(expected);
});

test("4. Unique strings", () => {
  const expected = ["a", "ab", "c"];
  const result = functions.uniqueStrings(["a", "ab", "ab", "c", "a"]);
  expect(result).toEqual(expected);
});

test("5. Developer", () => {
  const expected = {
    name: "David",
    languages: ["JavaScript", "Ruby", "TypeScript", "C++"]
  };
  // new instance for testing
  const result = new functions.Developer("David", [
    "JavaScript",
    "Ruby",
    "TypeScript",
    "C++"
  ]);

  expect(result).toEqual(expected);
});

test("6. Learn - add new language", () => {
  const expected = {
    name: "David",
    languages: ["JavaScript", "Ruby", "TypeScript", "C++", "PHP"]
  };

  // new instance for testing
  const dev = new functions.Developer("David", [
    "JavaScript",
    "Ruby",
    "TypeScript",
    "C++"
  ]);

  dev.learnLanguage("PHP");

  const result = dev;

  expect(result).toEqual(expected);
});

test("7. Learn - is unique", () => {
  const expected = {
    name: "David",
    languages: ["JavaScript", "Ruby", "TypeScript", "C++"]
  };

  // new instance for testing

  const dev = new functions.Developer("David", [
    "JavaScript",
    "Ruby",
    "TypeScript",
    "C++"
  ]);

  dev.learnLanguage("Ruby");

  const result = dev;

  expect(result).toEqual(expected);
});

test("8. Strings concatenated", () => {
  const expected = "This is the resultant string";
  const result = functions.stringsConcat([
    "This",
    10,
    11,
    "is",
    "the",
    6,
    "resultant",
    "string"
  ]);

  expect(result).toEqual(expected);
});

test("9. Negative numbers only", () => {
  const expected = [-2, -10, -10000, -2.5];
  const result = functions.negativeOnly([
    -2,
    2,
    -10,
    10,
    -10000,
    10000,
    -2.5,
    2.5
  ]);
  expect(result).toEqual(expected);
});

test("10. Camelise", () => {
  const expected = "camelCaseWord";
  const result = functions.camelise("camel case word");
  expect(result).toBe(expected);
});

test("11. Is prime", () => {
  const expected = true;
  const result = functions.isPrime(13);
  expect(result).toBe(expected);
});

test("12. Is not prime", () => {
  const expected = false;
  const result = functions.isPrime(15);
  expect(result).toBe(expected);
});

test("13. Walkabout", () => {
  const expected = {
    journey: [[0, 0]]
  };
  // new instance to test
  const result = new functions.Walker();
  expect(result).toEqual(expected);
});

test("14. Walk", () => {
  const expected = {
    journey: [[0, 0], [2, 0], [2, 3]]
  };
  // new instance to test
  const myJourney = new functions.Walker();

  const result = myJourney.walk("E", 2);
  myJourney.walk("N", 3);

  expect(result).toEqual(expected);
});

test("15. Current location", () => {
  const expected = [10, 5];

  // new instance to test
  const myJourney = new functions.Walker();

  myJourney.walk("E", 10);
  myJourney.walk("N", 5);

  const result = myJourney.currentLocation();

  expect(result).toEqual(expected);
});

test("16. List coordinates", () => {
  const expected = "<ul><li>0, 0</li><li>10, 0</li><li>10, 5</li></ul>";

  // new instance to test
  const myJourney = new functions.Walker();

  myJourney.walk("E", 10);
  myJourney.walk("N", 5);

  const result = myJourney.pathTaken();

  expect(result).toEqual(expected);
});

test("17. Total steps", () => {
  const expected = 10;

  // new instance to test
  const myJourney = new functions.Walker();

  myJourney.walk("E", 2);
  myJourney.walk("N", 3);
  myJourney.walk("S", 2);
  myJourney.walk("W", 3);

  const result = myJourney.totalSteps();
  expect(result).toEqual(expected);
});
