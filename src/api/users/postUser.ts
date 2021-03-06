import express from 'express';
import { userModel } from '../../models/userModel';
import { IUser, IsUser } from '../../interfaces/basic/IUser';
import { IUserModel } from '../../interfaces/models/IModelUser';
import { SendError } from '../../utils/local_utils';



export async function addUser(req: express.Request, res: express.Response)
{
  const userPayload = req.body;

  console.log(` body : ${JSON.stringify(userPayload)}`);

  if (!IsUser(userPayload))
  {
    console.log(`Invalid 'user' format`);
    throw new Error();
  }

  const elementToInsert: IUser = userPayload;

  console.log('preparing model...');
  const userDocument: IUserModel = new userModel(elementToInsert);


  console.log('saving model...');

  let saveResponse: IUserModel;
  try
  {
    saveResponse = await userDocument.save();
  }
  catch (ex)
  {
    console.log(ex);
    SendError(res, 500);
    return;
  }

  console.log('salvat !');
  res.status(200);
  res.send(saveResponse);

}
