const express = require('express');
const http = require('http');



const router = express.Router();


router.get('/', (req, res) => {
    res.send('ok');
})


router.get('/proba', (req, res) => {
      
      res.status(200);
      res.send('proba');
  })

module.exports = router;