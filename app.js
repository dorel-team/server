const express = require('express');
const PORT = 5001 ;
const api = require('./routes/api')

const app =express();



const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/proba`)
.then(() => {
    console.log('Connected to database');
    // app.listen(port, () => {
    //   console.log(`Express server listening on port ${port}`);
    // });
  });


app.use('/',api);


app.listen(PORT,function(){
    console.log(`Serverul merge pe portul ${PORT}`)
})