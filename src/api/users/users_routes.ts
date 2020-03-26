import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { addUser } from './postUser';
import { findUser as getUser } from './getUser';
import { findAllUsers as getAllUsers } from './getAllUsers';
import { deleteUser } from './deleteUser';

export const routeUsers = Router();

routeUsers.post('/', asyncHandler(async (res, req) => addUser(res, req)));

routeUsers.get('/', asyncHandler(async (req, res) => getAllUsers(req, res)));
routeUsers.get('/:id', asyncHandler(async (req, res) => getUser(req, res)));

routeUsers.delete('/:id', asyncHandler(async (req, res) => deleteUser(req, res)));
console.log(' routes added...');
