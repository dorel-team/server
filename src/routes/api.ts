import * as express from 'express';
import { connect as mongooseConnect } from 'mongoose';
import { userModel } from '../models/model_user';
import { IUser } from '../interfaces/IUser';
import { IUserModel } from '../interfaces/IModel';
export const router = express.Router();


const db = `mongodb://localhost:27017/proba`

mongooseConnect(db, { useNewUrlParser: true, useUnifiedTopology: true }, err =>
{
  if (err)
  {
    console.error('Eroare! ' + err);
  } else
  {
    console.log('Conectat la baza de date!');

  }
})


// const proba = new serialeFavorite({user:"adi"});
// proba.save(function (err) {
//   if (err) return console.log(err);
//   console.log("salvat");
//   // saved!
// });

async function testRecord(req: express.Request, res: express.Response)
{

  const elementToInsert: IUser =
  {
    uid: 'dorel',
    userName: 'd01',
    email: 'dorel69@email.com'
  }

  const respunsProba: IUserModel = new userModel(elementToInsert);

  try
  {
    await respunsProba.save(err =>
    {
      if (err) return console.log(err);
      // saved!
    });
  }
  catch (ex)
  {
    console.log(ex);
    res.status(500);
    res.send('eroare');
    return;
  }

  console.log("salvat");


}


// serialeFavorite.find((err, element) => {

//   if (err) {

//     console.log(err);
//   } else {
//     console.log(element);
//   }

// })



router.get('/proba', (req, res) => testRecord);

router.get('/', (req, res) =>
{
  res.status(200);
  res.send('ok');
})




  // serialeFavorite.find((err, element) => {

  //   //   if (err) {

  //   //     console.log(err);
  //   //   } else {
  //   //     console.log(element);
  //   //   }

  //   // })
