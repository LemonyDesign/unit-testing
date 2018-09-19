const functions = require('../src/index');

test('Addition', function() {
  const expected = 5;
  const result = functions.add(2, 3);
  expect(result).toEqual(expected);
});

test('Longest String', function() {
  const expected = 'abcd';
  const result = functions.longestString(['a', 'abc', 'abcd', 'ab', 'defg']);
  expect(result).toEqual(expected);
});

test('L337', () => {
  const expected = '112345677890';
  const result = functions.l337('ilzeasgtybqo');
  expect(result).toEqual(expected);
});

test('Unique strings', () => {
  const result = functions.uniqueStrings(['a', 'ab', 'ab', 'c', 'a']);
  const expected = ['a', 'ab', 'c'];
  expect(result).toEqual(expected);
});
