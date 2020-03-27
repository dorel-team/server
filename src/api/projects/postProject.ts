import express from 'express';
import { userModel } from '../../models/model_user';
import { IUser, IsIUser } from '../../interfaces/basic/IUser';
import { IUserModel } from '../../interfaces/models/IModelUser';



export async function addProject(req: express.Request, res: express.Response)
{
  const projectId = req.body;

  console.log(` body : ${JSON.stringify(req.body)}`);

  // const elementToInsert: IUser =
  // {
  //   userName: 'd01',
  //   email: 'dorel69@email.com'
  // }

  if (!IsIUser(req.body))
    throw new Error('Wrong user format !');

  const elementToInsert: IUser = req.body;

  console.log('preparing model...');
  const respunsProba: IUserModel = new userModel(elementToInsert);


  console.log('saving model...');

  let saveResponse: IUserModel;
  try
  {
    saveResponse = await respunsProba.save();
  }
  catch (ex)
  {
    console.log(ex);
    res.status(500);
    res.send('eroare');
    return;
  }

  console.log('salvat !');
  res.status(200);
  res.send(saveResponse);

}
