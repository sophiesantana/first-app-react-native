import AppDataSource from "../../database/connectionPG"
import { Product } from "../entities/Product"

type ProductRequest = {
  id: string,
  src: string,
  name: string,
  description: string,
  price: number
}

export class UpdateProductService {
  async execute({ id, src, name, description, price }: ProductRequest): Promise<Product | Error> {
    
    const productRepository = AppDataSource.getRepository(Product);

    const updateProduct = await productRepository.update(id, { src, name, description, price });

    if (updateProduct.affected === 0) {
      return new Error('Product not found');
    }

    return productRepository.findOneBy({ id });
  }
}