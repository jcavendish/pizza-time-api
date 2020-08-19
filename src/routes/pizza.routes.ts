import { Router } from 'express';
import PizzaController from '../controllers/PizzaController';

const pizzasRouter = Router();
const pizzaController = new PizzaController();

pizzasRouter.get('/', pizzaController.index);

export default pizzasRouter;
