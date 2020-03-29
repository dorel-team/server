import express from 'express';
import { userModel } from '../../models/userModel';
import { IUserModel } from '../../interfaces/models/IModelUser';
import { SendError } from '../../utils/local_utils';

export async function getAllUsers(req: express.Request, res: express.Response)
{

    const userId = req.params.id;

    console.log(`userID: ${userId}`);

    let searchQuery: IUserModel[] | null;

    try
    {
        console.log('searching...');
        searchQuery = await userModel.find({}, null, { $orderby: { age: -1 } });
    }
    catch (ex)
    {
        console.log(`error: ${ex}`);
        SendError(res, 500);
        return;
    }

    res.status(200);
    res.send(searchQuery);

}
