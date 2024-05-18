import Joi from "joi";

export const addReviewSchema = Joi.object({
    rate: Joi.number().min(1).max(5),
    feadback: Joi.string().min(5).max(100),
    userId:  Joi.string().required(),
    productId:  Joi.string().required(),
    isDeleted: Joi.boolean().default(false)
})