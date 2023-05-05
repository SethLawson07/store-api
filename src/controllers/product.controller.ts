import { Request, Response } from "express"
import { myDataSource } from "../database/data-source"
import { Product } from "../entities/product.entity"

const getAllProduct = async (req: Request, res: Response) => {

    try {
        const products = await myDataSource.getRepository(Product).find()
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json(error)
        
    }
}

const getProductById = async (req: Request, res: Response) => {

    try {
        let id:string = req.params.id
        const results = await myDataSource.getRepository(Product).findOneBy({
            id: id,
        })
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json(error)
        
    }
}

const addProduct = async (req: Request, res: Response) => {

    try {

        let {name,description,instockQuantity,price,categoryId} = req.body
        let newProduct = new Product()

        newProduct.name=name
        newProduct.description=description
        newProduct.instockQuantity=instockQuantity
        newProduct.price=price
        newProduct.categories=categoryId

        const product = await myDataSource.getRepository(Product).create(req.body)
        const results = await myDataSource.getRepository(Product).save(product)
        res.status(201).json(results)
    } catch (error) {
        res.status(400).json(error)
        
    }
}


const UpdateProduct = async (req: Request, res: Response) => {

    try {
        let id:string = req.params.id
        const product = await myDataSource.getRepository(Product).findOneBy({
            id: id,
        })
        myDataSource.getRepository(Product).merge(product, req.body)
        const results = await myDataSource.getRepository(Product).save(product)
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json(error)
        
    }
}


const deleteProduct = async (req: Request, res: Response) => {

    try {
        const results = await myDataSource.getRepository(Product).delete(req.params.id)
        res.status(204).json(results)
    } catch (error) {
        res.status(400).json(error)
        
    }
}


export {getProducts,getProduct,addProduct,UpdateProduct,deleteProduct}