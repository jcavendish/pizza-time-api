import { Router } from 'express';
import pizzasRouter from './pizza.routes';

const routes = Router();

routes.use('/pizzas', pizzasRouter);

export default routes;
