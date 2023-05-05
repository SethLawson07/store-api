import { myDataSource } from "../database/data-source";
import { Category } from "../entities/category.entity";


const getAllCategory =async () => {

    try {        
        const categories = await myDataSource.getRepository(Category).find()
    //    const categories = await myDataSource.getRepository(Category).createQueryBuilder('category').getMany()

        return categories;

    } catch (error) {
       // throw new Error(error.message);
       console.log("A"+error);
       
    }
}


const getCategoryById = async (id:string) => {

    try {
        const category = await myDataSource.getRepository(Category).findOneBy({
            id: id,
        });
        return category;
    } catch (error) {
        throw new Error(error.message);   
    }
}


const createCategory = async (name:string) => {

    try {
        let newCategory = new Category();
        newCategory.name = name

        const category = await myDataSource.getRepository(Category).create(newCategory)
        const results = await myDataSource.getRepository(Category).save(category)
        return results;
    } catch (error) {
        throw new Error(error.message);   
    }
}

const updateCategory = async (id:string,name:string) => {

    try {
        let newCategory = new Category();
        newCategory.name = name

        const category = await myDataSource.getRepository(Category).findOneBy({
            id: id,
        })
        myDataSource.getRepository(Category).merge(category, newCategory)
        const results = await myDataSource.getRepository(Category).save(category)
       
        return results;
    } catch (error) {
        throw new Error(error.message);   
        
        
    }
}


const deleteCategory = async (id:string) => {

    try {
        const results = await myDataSource.getRepository(Category).delete(id)
        return results;
    } catch (error) {
        throw new Error(error.message);   
    }
}



export {getAllCategory,getCategoryById,createCategory,updateCategory,deleteCategory}