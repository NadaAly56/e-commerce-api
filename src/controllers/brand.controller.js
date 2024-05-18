import { catchAsyncError } from "../middlewares/catchAsyncError.js"
import { brandModel } from "../models/brands.model.js"

const getAllBrands = catchAsyncError(async(req, res, next)=> {
        const cats = await brandModel.find()
        .populate("categoryId").populate("subCategoryId")
        res.status(200).json({message:"success", cats})
})

const addBrand = catchAsyncError(async(req, res, next)=> {
    const { title, bio, categoryId, subCategoryId } = req.body
    const isExist = await brandModel.findOne({title})
    if (!title || !bio || !categoryId || !subCategoryId) 
        next(AppError("Missed data", 309))
    if (isExist) 
        next(AppError("Brand is already Exist", 309))
    
    await brandModel.insertMany()
    res.status(200).json({message:"success"})
})
const updateBrand = catchAsyncError( async (req, res, next)=> {
    const { id } = req.params
    const { body } = req
    const { title, bio } = body
    if (!id || !body || !title || !bio) next(AppError("Missed data", 400))
    const isExist = brandModel.findOne({_id:id})
    if (!isExist) next(AppError("Brand not found", 404))
    res.status(200).json({message: "success"})
})

const deleteBrand = catchAsyncError( async (req, res, next)=>{
    const { id } = req.params
    const isExist = brandModel.findOne({_id:id})
    if (!isExist) next(AppError("Brand not found", 404))
    res.status(200).json({message: "success"})
})

export {
    getAllBrands,
    addBrand,
    updateBrand,
    deleteBrand
}