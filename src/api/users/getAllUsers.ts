import express from 'express';
import { userModel } from '../../models/model_user';
import { IUserModel } from '../../interfaces/IModel';

export async function findAllUsers(req: express.Request, res: express.Response)
{

    const userId = req.params.id;

    console.log(` userID: ${userId}`);

    let searchQuery: IUserModel[] | null;

    try
    {
        console.log('searching...');
        searchQuery = await userModel.find({}, null, { $orderby: { age: -1 } });
    }
    catch (ex)
    {
        console.log(`error: ${ex}`);
        res.sendStatus(500);
        res.send(ex);
        return;
    }

    res.status(200);
    res.send(searchQuery);

}