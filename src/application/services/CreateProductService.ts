import AppDataSource from "../../database/connectionPG"
import { Product } from "../entities/Product"

type ProductRequest = {
  src: string,
  name: string,
  description: string,
  price: number
}

export class CreateProductService {
  async execute({ src, name, description, price }: ProductRequest): Promise<Product | Error> {
    const ProductRepository = AppDataSource.getRepository(Product);

    const createProduct = ProductRepository.create({
      src,
      name,
      description,
      price
    })

    await ProductRepository.save(createProduct);

    return createProduct;
  }
}