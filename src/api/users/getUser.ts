import express from 'express';
import { userModel } from '../../models/model_user';
import { IUserModel } from '../../interfaces/IModel';
import { IResponse } from '../../interfaces/IResponse';

const responseInvalidUser: IResponse = { responseCode: 404, responseMessage: 'Invalid userID' }

export async function findUser(req: express.Request, res: express.Response)
{

    const userId = req.params.id;

    if (typeof userId !== 'string')
    {
        res.status(responseInvalidUser.responseCode).send(responseInvalidUser);
    }

    console.log(` userID: ${userId}`);

    let searchQuery: IUserModel | null;

    try
    {
        console.log('searching...');
        searchQuery = await userModel.findOne({ _id: userId });
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