import { Request, Response } from "express";
import { UpdateProductService } from "../services/UpdateProductService";


export class UpdateProductController {
  async handle(req: Request, res: Response) {
    const { src, name, description, price } = req.body;

    const { id } = req.params;

    const service = new UpdateProductService();

    const result = await service.execute({ id, src, name, description, price });

    if (result instanceof Error) {
      return res.status(401).json(result.message);
    }

    return res.json(result);
  }
} 