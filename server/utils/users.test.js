var expect = require('expect');

const {Users} = require('./users.js');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    },{
      id: '2',
      name: 'Jen',
      room: 'React Course'
    },{
      id: '3',
      name: 'Tom',
      room: 'Node Course'
    }]
  });

  it('Should reject non string values', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Tom',
      room: 'Node.js Developers'
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('Should return names for Node Course', () => {
    var userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Mike', 'Tom']);
  });

  it('Should return names for React Course', () => {
    var userList = users.getUserList('React Course');
    expect(userList).toEqual(['Jen']);
  });

  it('Should remove a user', () => {
    var removedUser = users.removeUser('1');
    console.log('Users length is:', users.users.length);
    expect(users.users.length).toBe(2);
    expect(removedUser).toMatchObject({
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    });
  });

  it('Should not remove a user', () => {
    var removedUser = users.removeUser('5');
    expect(removedUser).toNotExist;
  });

  it('Should find a user', () => {
    var user = users.getUser('2');
    expect(user).toMatchObject({
      id: '2',
      name: 'Jen',
      room: 'React Course'
    });
  });

  it('Should not find a user', () => {
    var user = users.getUser('5');
    expect(user).toNotExist;
  });

});
