const express =require('express');




var app=express();

app.get('/',(req,res)=>{
    res.status(404).send({
        error:'page not found.',
        name:'Todo App v1.0'
    });

})

app.get('/user',(req,res)=>{
    res.send([{
        name:'Hardik',
        age:20},
        {
            name:'harshit',
            age:21
        },
        {
            name:'Gopi',
            age:15
        }
    ])
})


app.listen(3000,()=>{
    console.log(`server start at port number 3000`);
    
});

module.exports.app=app;