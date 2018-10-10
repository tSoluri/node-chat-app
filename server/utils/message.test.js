var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('Should generate correct loaction object', () => {
    var from = 'Admin';
    var latitude = 33.021873;
    var longitude = -97.2678736;
    var locationMessage = generateLocationMessage(from,latitude,longitude);
    expect(typeof locationMessage.createdAt).toBe('number');
    expect(locationMessage.from).toBe(from);
    expect(locationMessage.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`)
  });
})
