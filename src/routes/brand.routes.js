import express from 'express'
import { addBrand, deleteBrand, getAllBrands, updateBrand } from '../controllers/brand.controller.js'
export const brandRouter = express.Router()

brandRouter.route('/')
    .get(getAllBrands)
    .post(addBrand)
    .put(updateBrand)
    .delete(deleteBrand)
