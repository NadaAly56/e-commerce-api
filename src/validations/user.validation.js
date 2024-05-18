import Joi from "joi"

const signUpSchema = Joi.object({
    name:Joi.string().min(3).required(),
    email:Joi.string().email().required(),
    password: Joi.string().pattern(/^[A-Za-z0-9]{4,8}$/).required(),
    rePassword: Joi.ref('password'),
    phone: Joi.string().min(10).required()
})

const signInSchema = Joi.object({
    email:Joi.string().email().required(),
    password: Joi.string().pattern(/^[A-Za-z0-9]{4,8}$/).required(),
})

export {
    signInSchema,
    signUpSchema
}