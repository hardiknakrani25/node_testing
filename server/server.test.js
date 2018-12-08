const request=require('supertest');
const expect=require('expect');
var app=require('./server').app;

describe('#get request',()=>{
    it('should return hello world response',(done)=>{
        request(app)
        .get('/')
        .expect(404)
        .expect((res)=>{
    expect(res.body).toInclude({
        error:'page not found.'
    })
        })
        .end(done);
    })
    
})

describe('#user object',()=>{
    it('should return user object',(done)=>{
        request(app)
        .get('/user')
        .expect(200)
        .expect((res)=>{
            expect(res.body).toInclude({
                name:'Hardik',
                age:20
            })
        })
        .end(done);
    })
})
