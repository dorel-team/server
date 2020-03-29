import express from 'express';
import { userModel } from '../../models/userModel';
import { IUserModel } from '../../interfaces/models/IModelUser';
import { IResponse } from '../../interfaces/basic/IResponse';
import { SendError, ErrorIds, HttpReturnCodes } from '../../utils/local_utils';

export async function getUser(req: express.Request, res: express.Response)
{

    const userId = req.params.id;

    if (typeof userId !== 'string')
    {
        console.log('Bad user ID');
        throw new Error();
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
        SendError(res, 400);
        return;
    }

    if (!searchQuery)
        res.status(200).json({});

    res.status(200);
    res.send(searchQuery);
}
