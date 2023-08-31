import { Router } from "express";
import ProductController from "../controllers/product.controller.js";

const productController= new ProductController()
const router =Router()

router
    .get('/',productController.getAll.bind(productController))
    .get('/:id',productController.getById.bind(productController))
    .post('/',productController.create.bind(productController))
    .put('/:id',productController.update.bind(productController))
    .delete('/:id',productController.delete.bind(productController))



export default router