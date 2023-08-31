import Controllers from "./class.controller.js";
import ProductService from "../services/product.service.js";
const produtService=new ProductService()
export default class ProductController extends Controllers{
    constructor(){
        super(produtService);
    }
}