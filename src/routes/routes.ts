import * as express from 'express';
import { addUser } from '../api/users/postUser';
import { routeUsers } from '../api/users/users_routes';

export const router = express.Router();

router.use('/users', routeUsers);

// router.get('/proba', (req, res) => addUser(req, res));
// router.get('/proba/find', (req, res) => findUser(req, res));

router.all('/', (req, res) =>
{
  res.status(200);
  res.send('[default]');
})

