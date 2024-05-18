import { userModel } from "../../../database/models/user.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../../utils/generateToken.js";
import { sendEmail } from "../../emails/user.email.js";

const getAllUsers = async (req, res) => {
  const users = await userModel.find();
  res.json({ users });
};

const signUp = async (req, res) => {
  const { name, email, password, phone } = req.body;
  const redirectLink = req.header('redirectLink')
  const user = await userModel.findOne({ email });
  if (!user) {
    bcrypt.hash(password,Number(process.env.HASH_ROUND),async function (err, hash) {
        const newUser = await userModel.insertMany({name,email,password: hash,phone,});
        sendEmail({email, redirectLink})
        res.json({ msg: "success", newUser });
      }
    );
  } else {
    res.json({ msg: "email is already in use!!" });
  }
};

const verivyEmail = async(req, res)=>{
  const email = req.email
  await userModel.findOneAndUpdate({email}, {emailConfirmed:true})
  res.json({msg:'success'})
}

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  const match = user?await bcrypt.compare(password, user.password):true
  if (!match || !user) 
    return res.json({ msg: "Email or Password is incorrect" });

  user.password = undefined
  let token = generateToken({user});
      res.json({ msg: "success", token, user });
};

const deleteAccount = async (req, res) => {
  const { _id } = req.body;
  const user = await userModel.findOne({ _id });
  if (user) {
    await userModel.findByIdAndDelete({ _id });
    res.json({ msg: "Account deleted" });
  } else res.json({ msg: "ID is not found!!" });
};
export { getAllUsers, signUp, signIn, deleteAccount, verivyEmail };
