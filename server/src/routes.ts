import express from 'express';

import ItemsController from './controller/Itemscontroller';
import PointsController from './controller/PointsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

// index, create, update, show, delete

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;