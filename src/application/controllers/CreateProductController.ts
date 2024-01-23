import { Request, Response } from "express";
import { CreateProductService } from "../services/CreateProductService";


export class CreateProductController {
  async handle(req: Request, res: Response) {
    const { src, name, description, price } = req.body;

    const service = new CreateProductService();

    const result = await service.execute({ src, name, description, price });

    if (result instanceof Error) {
      return res.status(401).json(result.message);
    }

    return res.json(result);
  }
}