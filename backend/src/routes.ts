import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);
// methods: index, create, update, delete

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

/**
 * Rota = conjunto
 * Recurso = user
 * Métodos HTTP = GET, POST, PUT, DELETE
 * Parâmetros
 * * Query params (res.query): http://localhost:3333/users?search=samuel
 * * Route params (res.params): http://localhost:3333/users/1 (identificar um recurso)
 * * Body (res.body): http://localhost:3333/users (varios dados)
 */

export default routes;