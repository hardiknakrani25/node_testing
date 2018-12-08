const expect=require('expect');

const rewire=require('rewire');


var app=rewire('./app');

describe('App',()=>{

    var db={
        saveUser:expect.createSpy()
    };
    app.__set__('db',db);
  
    it('should call user with user object',()=>{
        var email='hdnakarani@gmail.com';
        var password='123abc';

        app.handleSignup(email,password);
expect(db.saveUser).toHaveBeenCalledWith({email,password});
    })
 
})