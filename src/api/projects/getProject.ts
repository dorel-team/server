import express from 'express';
import { userModel } from '../../models/userModel';
import { IUserModel } from '../../interfaces/models/IModelUser';
import { IResponse } from '../../interfaces/IResponse';
import { respond } from '../../utils/local_utils';

const responseInvalidUser: IResponse = { responseCode: 400, responseMessage: 'Invalid userID' };

export async function getProject(req: express.Request, res: express.Response)
{

    const userId = req.params.id;

    if (typeof userId !== 'string')
        throw new Error();

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
        respond(res, 400, 'Invalid userID');
        return;
    }

    if (!searchQuery)
    {
        // respond(res, 200, JSON.stringify(searchQuery))
        res.status(200).json({});
    }

    const a = 'vasile"ceva"';

    res.status(200);
    res.send(searchQuery);
}
