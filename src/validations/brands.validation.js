import Joi from "joi";

export const addBrandSchema = Joi.object({
    title: Joi.string().required().min(3).max(20),
    bio: Joi.string().min(20).max(100),
    categoryId:  Joi.string().required(),
    subCategoryId:  Joi.string().required(),
    isDeleted: Joi.boolean().default(false)
})