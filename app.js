const express = require('express');
const PORT = 5001 ;
const api = require('./routes/api')

const app =express();


app.use('/',api);


app.listen(PORT,function(){
    console.log(`Serverul merge pe portul ${PORT}`)
})