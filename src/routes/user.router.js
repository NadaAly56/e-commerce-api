import express from "express";
import {
  deleteAccount,
  getAllUsers,
  signIn,
  signUp,
  verivyEmail,
} from "../controllers/user.controller.js";
import { emailAuth } from "../middlewares/auth.js";
import { signInSchema, signUpSchema } from "../validations/user.validation.js";
import { validation } from "../middlewares/validation.js";
const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signUp", validation(signUpSchema), signUp);
userRouter.get("/verify/:token", emailAuth, verivyEmail);
userRouter.post("/signIn", validation(signInSchema), signIn);
userRouter.delete("/delete", deleteAccount);
export default userRouter;
