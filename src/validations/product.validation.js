import Joi, { string } from "joi";

export const addProductSchema = Joi.object({
    title: Joi.string().required().min(3).max(20),
    desc: Joi.string().min(20).max(100),
    categoryId:  Joi.string().required(),
    subCategoryId:  Joi.string().required(),
    brandId:  Joi.string().required(),
    price: Joi.number().required(),
    onSale: Joi.boolean().default(false),
    priceAfterSale: Joi.number().when('onSale', {is: true, then:Joi.required()}),
    priceAfterCupon: Joi.number().default('price'),
    hasColors: Joi.boolean().default(false),
    colors: Joi.array().items(string()).when('hasColors', {is: true, then:Joi.required()}),
    imageCover: Joi.string().required(),
    images: Joi.array().items(string()).validate(5),
    avrageReviews: Joi.number().required(),
    isConfirmed: Joi.boolean().default(false),
    isDeleted: Joi.boolean().default(false),

})