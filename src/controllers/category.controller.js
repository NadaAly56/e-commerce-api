import { catchAsyncError } from "../middlewares/catchAsyncError.js"
import { categoryModel } from "../models/category.model.js"
import AppError from '../utils/appErrorClass.js'
const getAllCategories = catchAsyncError(async(req, res, next)=> {
        const cats = await categoryModel.find()
        res.status(200).json({message:"success", cats})
})

const addCategory = catchAsyncError(async(req, res, next)=> {
    const {title} = req.body
    const { filename } = req.file
    const isExist = await categoryModel.findOne({title})
    if (isExist) 
        return next(new AppError("Category is already Exist", 309))
    
    await categoryModel.insertMany({title, categoryImg:filename})
    res.status(200).json({message:"success"})
})
const updateCategory = catchAsyncError( async (req, res, next)=> {
    const { body } = req
    const { title, _id } = body
    const { filename } = req.file
    if (!_id) next(new AppError("Missed data", 400))
    const isExist = await categoryModel.findOne({_id})
    if (!isExist) next(new AppError("Category not found", 404))

    await categoryModel.findByIdAndUpdate({_id},  {...body, categoryImg:filename})
    res.status(200).json({message: "success"})
})

const deleteCategory = catchAsyncError( async (req, res, next)=>{
    const { _id } = req.body
    const isExist = await categoryModel.findOne({_id})
    if (!isExist) next(new AppError("Category not found", 404))
    await categoryModel.findByIdAndDelete({_id})
    res.status(200).json({message: "success"})
})

export {
    getAllCategories,
    addCategory,
    updateCategory,
    deleteCategory
}