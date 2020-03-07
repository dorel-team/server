const express = require('express');
const http = require('http');



const router = express.Router();


const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/proba`)
.then(() => {
    console.log('Connected to database');
    // app.listen(port, () => {
    //   console.log(`Express server listening on port ${port}`);
    // });
  });


app.use('/',api);






router.get('/', (req, res) => {
    res.status(200);
    res.send('ok');
})


router.get('/proba', (req, res) => {
      
      res.status(200);
      res.send('proba');
  })

module.exports = router;