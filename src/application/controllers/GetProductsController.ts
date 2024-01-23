import { Request, Response } from "express";
import { GetProductsService } from "../services/GetProductsService";


export class GetProductsController {
  async handle(req: Request, res: Response) {

    const service = new GetProductsService();

    const result = await service.execute();

    if (result instanceof Error) {
      return res.status(401).json(result.message);
    }

    return res.json(result);
  }
}