import express from 'express';
import { userModel } from '../../models/model_user';
import { IUserModel } from '../../interfaces/IModel';

export async function findUser(req: express.Request, res: express.Response)
{

    const userId = req.params.id;

    let searchQuery: IUserModel | null;

    try
    {
        console.log('searching...');
        searchQuery = await userModel.findOne({"_id":userId});
    }
    catch (ex)
    {
        console.log(`error: ${ex}`);
        res.sendStatus(500);
        res.send(ex);
        return;
    }

    // console.log(searchQuery);

    res.status(200);
    res.send(searchQuery);
}