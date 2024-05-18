import express from 'express'
import { addSubCategory, deleteSubCategory, getAllSubCategories, updateSubCategory } from '../controllers/subCategory.controller.js'
export const subCategorieRouter = express.Router()

subCategorieRouter.route('/')
    .get(getAllSubCategories)
    .post(addSubCategory)
    .put(updateSubCategory)
    .delete(deleteSubCategory)
