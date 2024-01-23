import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";
import { UpdateProductController } from "./controllers/UpdateProductController";
import { GetProductsController } from "./controllers/GetProductsController";

const routes = Router();

routes.post("/product", new CreateProductController().handle);
routes.get("/product", new GetProductsController().handle);
routes.put("/product/:id", new UpdateProductController().handle);

export default routes;