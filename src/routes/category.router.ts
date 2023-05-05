import * as express from "express"
import {
        getAllCategoryController,
        getCategoryByIdController,
        createCategoryController,
        updateCategoryController,
        deleteCategoryController
} from "../controllers/category.controller"

const router = express.Router();

router.route("/categories").post(createCategoryController);
router.route("/categories").get(getAllCategoryController);
router.route("/categories/:id").get(getCategoryByIdController);
router.route("/categories/:id").put(updateCategoryController);
router.route("/categories/:id").delete(deleteCategoryController);

export {router}

