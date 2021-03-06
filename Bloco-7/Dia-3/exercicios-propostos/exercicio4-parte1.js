const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

assert.deepStrictEqual(typeof(myFizzBuzz), "function");
assert.deepStrictEqual(myFizzBuzz(15),"fizzbuzz");
assert.deepStrictEqual(myFizzBuzz(12),"fizz");
assert.deepStrictEqual(myFizzBuzz(5),"buzz");
assert.notDeepStrictEqual(myFizzBuzz("5"),"buzz");