import { Request, Response } from 'express';
import FakePizzaRepository from '../repositories/FakePizzaRepository';

class PizzaController {
  public async index(request: Request, response: Response): Promise<Response> {
    const pizzaRepository = new FakePizzaRepository();
    const pizzas = await pizzaRepository.findAll();

    return response.json(pizzas);
  }
}

export default PizzaController;
