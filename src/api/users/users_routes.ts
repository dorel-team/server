import express from 'express';
import { addUser } from './postUser';
import { findUser } from './getUser';

export const routeUsers = express.Router();

routeUsers.post('/', (req, res)=> addUser(req, res));
// routeUsers.put('/:id', (req, res)=> addUser(req, res));
// routeUsers.delete('/:id', (req, res)=> addUser(req, res));
routeUsers.get('/:id', (req, res)=> findUser(req, res));

// routeUsers.get('/info', (req, res)=> findUser(req, res));
