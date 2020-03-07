const express = require('express');
const http = require('http');



const router = express.Router();


const mongoose = require('mongoose');
const models = require('../models/models');



const db = `mongodb://localhost:27017/proba`

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true  }, err => {
  if (err) {
    console.error('Eroare! ' + err);
  } else {
    console.log('Conectat la baza de date!');

  }
})


let proba = new models.serialeFavorite({user:"adi"});
proba.save(function (err) {
  if (err) return handleError(err);
  console.log("salvat");
  // saved!
});





models.serialeFavorite.find((err, element) => {

  if (err) {

    console.log(err);
  } else {
    console.log(element);
  }

})




router.get('/', (req, res) => {
    res.status(200);
    res.send('ok');
})


router.get('/proba', (req, res) => {
      
      res.status(200);
      res.send('proba');
  })

module.exports = router;