import express from 'express';
import { projectModel } from '../../models/projectModel';
import { IProject, IsProject } from '../../interfaces/basic/IProject';
import { IProjectModel } from '../../interfaces/models/IModelProject';



export async function addProject(req: express.Request, res: express.Response)
{
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
