const functions = require('../src/index');

test('Addition', function() {
  const expected = 5;
  const result = functions.add(2, 3);
  expect(result).toEqual(expected);
});

test('Longest String', function() {
  const expected = 'abcd';
  const result = functions.longestString(['a', 'abc', 'abcd', 'ab']);
  expect(result).toEqual(expected);
});
