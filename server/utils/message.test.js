var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('Should generate correct message object', () => {
    var from = 'tom@example.com';
    var text = 'Testing chat app';
    var message = generateMessage(from, text)
    expect(typeof message.createdAt).toBe('number');
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
  });
});
