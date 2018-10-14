var expect = require('expect');

var {isRealString} = require('./validation.js');

describe('isRealString', () => {
  it('Should reject non string values', () => {
    var test = isRealString(56);
    expect(test).toBe(false);
  });
  it('Should reject string with spaces only', () => {
    var test = isRealString('   ');
    expect(test).toBe(false);
  });
  it('Should all string with non-space character', () => {
    var test = isRealString('Tom');
    expect(test).toBe(true);
  });
});
