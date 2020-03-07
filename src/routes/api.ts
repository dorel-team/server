import * as express from 'express';
import { connect as mongooseConnect } from 'mongoose';
import { serialeFavorite } from '../models/models';
export const router = express.Router();


const db = `mongodb://localhost:27017/proba`

mongooseConnect(db, { useNewUrlParser: true, useUnifiedTopology: true  }, err => {
  if (err) {
    console.error('Eroare! ' + err);
  } else {
    console.log('Conectat la baza de date!');

  }
})


const proba = new serialeFavorite({user:"adi"});
proba.save(function (err) {
  if (err) return console.log(err);
  console.log("salvat");
  // saved!
});





serialeFavorite.find((err, element) => {

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
