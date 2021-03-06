import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { addProject } from './postProject';
import { updateProject } from './putProject';
import { getAllProjects } from './getAllProjects';
import { getProject } from './getProject';
import { deleteProject } from './deleteProject';


export const routeProjects = Router();



routeProjects.post('/', asyncHandler(async (res, req) => addProject(res, req)));
routeProjects.post('/', asyncHandler(async (res, req) => updateProject(res, req)));

routeProjects.get('/', asyncHandler(async (req, res) => getAllProjects(req, res)));
routeProjects.get('/:id', asyncHandler(async (req, res) => getProject(req, res)));

routeProjects.delete('/:id', asyncHandler(async (req, res) => deleteProject(req, res)));

console.log(' routes added...');

// TODO: implement PUT function to update projects
