const expect=require('expect');
const utils=require('./utils');


describe('utils',()=>{


    describe('#add',()=>{
        it('should add two number',()=>{
            var res=utils.add(33,11);
        });
        it('should async add two number',(done)=>{
            utils.asyncAdd(4,5,(sum)=>{
                expect(sum).toBe(9).toBeA('number');
            done();
            })
        })
    })
    

    describe('#square',()=>{
        it('Should square of x',()=>{
            var res=utils.square(5);
            expect(res).toBe(25).toBeA('number');
        })

        it('should async square of number',(done)=>{
            utils.asyncSquare(9,(square)=>{
                expect(square).toBe(81).toBeA('number');
                done();
        
            })
        })


    })
    
    
   
    describe('#user',()=>{
        it('should set firstName and lastName',()=>{
            var user={
                location:'surat',
                age:'25'
            }
            var res=utils.setName(user,'Hardik Nakrani');
            expect(res).toInclude({
                firstName:'Hardik',
                lastName:'Nakrani'
            })
        })
        
        
        
        
        it('should expect some values',()=>{
            expect(12).toNotBe(22);
            expect({name:'hardik'}).toEqual({name:'hardik'});
            expect([2,3,4]).toInclude(2);
            expect({
                name:'hardik',
                age:20,
                location:'surat'
            }).toInclude({
                age:20
            })
            expect({
                name:'hardik',
                age:20,
                location:'surat'
            }).toExclude({
                age:22
            })
        })
    })
   

})

