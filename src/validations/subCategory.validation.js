import Joi from "joi";

export const addSubCategorySchema = Joi.object({
    title: Joi.string().required().min(3).max(20),
    bio: Joi.string().min(20).max(100),
    categoryId:  Joi.string().required(),
    isDeleted: Joi.boolean().default(false)
})