import Joi from "joi";

export const addCategorySchema = Joi.object({
    title: Joi.string().required().min(3).max(20),
    isDeleted: Joi.boolean().default(false)
})