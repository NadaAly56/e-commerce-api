import express from 'express'
import { addCategory, deleteCategory, getAllCategories, updateCategory } from '../controllers/category.controller.js'
import { validation } from '../middlewares/validation.js'
import { addCategorySchema } from '../validations/category.validation.js'
import fileUpload from '../utils/fileUpload.js'
export const categoryRouter = express.Router()

categoryRouter.route('/')
    .get(getAllCategories)
    .post(fileUpload("categoryImg"),validation(addCategorySchema),addCategory)
    .put(fileUpload("categoryImg"), updateCategory)
    .delete(deleteCategory)
