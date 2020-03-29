import express from 'express';
import { userModel } from '../../models/userModel';
import { IResponse } from '../../interfaces/basic/IResponse';
import { SendError, HttpReturnCodes } from '../../utils/local_utils';


export async function deleteUser(req: express.Request, res: express.Response)
{
    const userId = req.params.id;

    if (typeof userId !== 'string')
    {
        throw new Error('Bad user ID');


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
            SendError(res, 500);
            return;
        }

        res.status(HttpReturnCodes.OK);
        res.send(searchQuery);
    }
}
