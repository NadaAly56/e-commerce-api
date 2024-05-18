import { catchAsyncError } from "../middlewares/catchAsyncError.js"
import { subCategoryModel } from "../models/subCategory.model.js"

const getAllSubCategories = catchAsyncError(async(req, res, next)=> {
        const cats = await subCategoryModel.find()
        res.status(200).json({message:"success", cats})
})

const addSubCategory = catchAsyncError(async(req, res, next)=> {
    const { title, bio, categoryId } = req.body
    const isExist = await subCategoryModel.findOne({title})
    if (!title || !bio || !categoryId) 
        next(AppError("Missed data", 309))
    if (isExist) 
        next(AppError("Brand is already Exist", 309))

    await subCategoryModel.insertMany(req.body)
    res.status(200).json({message:"success"})
})
const updateSubCategory = catchAsyncError( async (req, res, next)=> {
    const { id } = req.params
    const { title, bio, categoryId } = req.bosy

    if (!id || !categoryId || !title || !bio) 
        next(AppError("Missed data", 400))

    const isExist = subCategoryModel.findOne({_id:id})
    if (!isExist) 
        next(AppError("SubCategory not found", 404))
    
    res.status(200).json({message: "success"})
})

const deleteSubCategory = catchAsyncError( async (req, res, next)=>{
    const { id } = req.params
    const isExist = subCategoryModel.findOne({_id:id})
    if (!isExist) next(AppError("SubCategory not found", 404))
    res.status(200).json({message: "success"})
})

export {
    getAllSubCategories,
    addSubCategory,
    updateSubCategory,
    deleteSubCategory
}