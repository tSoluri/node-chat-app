var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.emit('createMessage', {
  from: 'tom@example.com',
  text: 'Hello. How are you doing today.',
});

socket.on('newMessage', function(newMessage) {
    console.log('newMessage', newMessage);
});

socket.on('disconnect', function () {
  console.log('Disconnected to server');
});
