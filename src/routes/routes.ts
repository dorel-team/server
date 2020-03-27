import { Router } from 'express';
import { addUser } from '../api/users/postUser';
import { routeUsers } from '../api/users/usersRoutes';
import { routeProjects } from '../api/projects/projectsRoutes';

export const router = Router();

router.use('/users', routeUsers);
router.use('/projects', routeProjects);
