import AppDataSource from "../../database/connectionPG"
import { Product } from "../entities/Product"

export class GetProductsService {
  async execute(): Promise<Product[] | Error> {
    const productRepository = AppDataSource.getRepository(Product);

    const findProducts = await productRepository.find();

    return findProducts;
  }
}