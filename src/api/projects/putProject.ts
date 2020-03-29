import express from 'express';
import { projectModel } from '../../models/projectModel';
import { IProject, IsProject } from '../../interfaces/basic/IProject';
import { IProjectModel } from '../../interfaces/models/IModelProject';
import { SendError } from '../../utils/local_utils';



export async function updateProject(req: express.Request, res: express.Response)
{
  // find
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
    SendError(res, 400, 'ProjectID does not exist')
  }

  // update
  const projectPayload = req.body;

  console.log(` body : ${JSON.stringify(projectPayload)}`);

  if (!IsProject(projectPayload))
    throw new Error('Wrong project format !');

  const elementToInsert: IProject = projectPayload;

  console.log('preparing model...');
  const projectDocument: IProjectModel = new projectModel(elementToInsert);


  console.log('saving model...');

  let saveResponse: IProjectModel;
  try
  {
    saveResponse = await projectDocument.save();
  }
  catch (ex)
  {
    console.log(ex);
    res.status(500);
    res.send('eroare');
    return;
  }

  console.log('salvat !');
  res.status(200);
  res.send(saveResponse);

}
