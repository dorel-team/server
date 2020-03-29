import express from 'express';
import { IResponse } from '../../interfaces/basic/IResponse';
import { SendError } from '../../utils/local_utils';
import { IProjectModel } from '../../interfaces/models/IModelProject';
import { projectModel } from '../../models/projectModel';

export async function getProject(req: express.Request, res: express.Response)
{

    const projectId = req.params.id;

    if (typeof projectId !== 'string')
        throw new Error();

    console.log(` projectID: ${projectId}`);

    let searchQuery: IProjectModel | null;

    try
    {
        console.log('searching...');
        searchQuery = await projectModel.findOne({ _id: projectId });
    }
    catch (ex)
    {
        console.log(`error: ${ex}`);
        SendError(res, 400, 'Invalid userID');
        return;
    }

    if (!searchQuery)
    {
        // respond(res, 200, JSON.stringify(searchQuery))
        res.status(200).json({});
    }

    res.status(200);
    res.send(searchQuery);
}
