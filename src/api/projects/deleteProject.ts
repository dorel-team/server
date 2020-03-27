import express from 'express';
import { userModel } from '../../models/model_user';
import { IResponse } from '../../interfaces/IResponse';
import { Query } from 'mongoose';
import { DeleteWriteOpResultObject } from 'mongodb';

const responseInvalidUser: IResponse = { responseCode: 404, responseMessage: 'Invalid userID' };

export async function deleteProject(req: express.Request, res: express.Response)
{
    const userId = req.params.id;

    if (typeof userId !== 'string')
    {
        res.status(responseInvalidUser.responseCode).send(responseInvalidUser);
    }

    console.log(` userID: ${userId}`);

    // let searchQuery: { ok?: number | undefined; n?: number | undefined; } & { deletedCount?: number | undefined; }; // inferred
    let searchQuery: any; // type 'any' to be used instead of inferred by userModel.deleteOne below

    try
    {
        console.log('searching...');
        searchQuery = await userModel.deleteOne({ _id: userId });
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
