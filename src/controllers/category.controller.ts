import { Request, Response } from "express"
import { Category } from "../entities/category.entity"
import { myDataSource } from "../database/data-source"
import { createCategory,
         getAllCategory,
         getCategoryById,
         updateCategory,
         deleteCategory 
 } from "../services/category.service"

const getAllCategoryController = async (req: Request, res: Response) => {
    
    try {
        const categories = await getAllCategory()
        res.status(200).json(categories)

    } catch (error) {
        console.log(error);
        console.log(__dirname);
        
        res.status(400).json(error)
        
        
    }
}

const getCategoryByIdController = async (req: Request, res: Response) => {

    try {
        let id = req.params.id
        const category = await getCategoryById(id)
        res.status(200).json(category)
    } catch (error) {
        console.log(error);
        
        res.status(400).json(error)
        
    }
}

const createCategoryController = async (req: Request, res: Response) => {

    try {

        let { name } = req.body;
        const results = await createCategory(name)
        res.status(201).json(results)
    } catch (error) {
        res.status(400).json(error)
        
    }
}


const updateCategoryController = async (req: Request, res: Response) => {

    try {
        let id = req.params.id
        let { name } = req.body;
        
        const results = await updateCategory(id,name)
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json(error)
        
    }
}


const deleteCategoryController = async (req: Request, res: Response) => {

    try {
        const results = await deleteCategory(req.params.id)
        res.status(204).json(results)
    } catch (error) {
        res.status(400).json(error)
        
    }
}


export {getAllCategoryController,
        getCategoryByIdController,
        createCategoryController,
        updateCategoryController,
        deleteCategoryController}