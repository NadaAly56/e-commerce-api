import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { productModel } from "../models/product.model.js";

const getAllProducts = catchAsyncError(async (req, res, next)=>{
    const products = await productModel.find()
    res.status(200).json({message:"success", products})
})

const addProduct = catchAsyncError(async (req, res, next)=>{
    const {title} = req.body
    const isExist = await categoryModel.findOne({title})
    if (isExist) 
        return next(AppError("Product is already Exist", 309))

    await productModel.insertMany(body)
    res.status(200).json({message:"success"})
})
export {
    getAllProducts,
    addProduct
}