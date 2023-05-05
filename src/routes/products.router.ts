import * as express from "express"
import {
    getProducts,
    getProduct,
    addProduct,
    UpdateProduct,
    deleteProduct 
} from "../controllers/product.controller"

const router = express.Router();

router.route("/products").post(addProduct);
router.route("/products").get(getProducts);
router.route("/products/:id").get(getProduct);
router.route("/products/:id").put(UpdateProduct);
router.route("/products/:id").delete(deleteProduct);