import {Router} from 'express';
import { addUser } from '../api/users/postUser';
import { routeUsers } from '../api/users/users_routes';

export const router = Router();

router.use('/users', routeUsers);
// router.use('/projects', routeUsers);
