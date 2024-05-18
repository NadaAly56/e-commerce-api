import  express  from "express";
import { deleteAccount, getAllUsers, signIn, signUp, verivyEmail } from "./user.controller.js";
import { validation } from "../../middleWare/validation.js";
import { signInSchema, signUpSchema } from "./user.validation.js";
import { emailAuth } from "../../middleWare/auth.js";
const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.post('/signUp', validation(signUpSchema), signUp);
userRouter.get('/verify/:token', emailAuth, verivyEmail);
userRouter.post('/signIn', validation(signInSchema), signIn);
userRouter.delete('/delete', deleteAccount)
export default userRouter;