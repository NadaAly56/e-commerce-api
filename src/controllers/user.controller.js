import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";
import { sendEmail } from "../emails/user.email.js";
import { userModel } from "../models/user.model.js";

const getAllUsers = async (req, res) => {
  const users = await userModel.find();
  res.json({ users });
};

const signUp = async (req, res) => {
  const { name, email, password, phone } = req.body;
  const redirectLink = req.header("redirectLink");
  const user = await userModel.findOne({ email });
  if (!user) {
    bcrypt.hash(
      password,
      Number(process.env.HASH_ROUND),
      async function (err, hash) {
        const newUser = await userModel.insertMany({
          name,
          email,
          password: hash,
          phone,
        });
        sendEmail({ email, redirectLink });
        res.status(201).json({ msg: "success", userId: newUser[0]._id });
      }
    );
  } else {
    res.status(409).json({ msg: "email is already in use!!" });
  }
};

const verivyEmail = async (req, res) => {
  const email = req.email;
  await userModel.findOneAndUpdate({ email }, { emailConfirmed: true });
  res.json({ msg: "success" });
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  const match = user ? await bcrypt.compare(password, user.password) : true;
  if (!match || !user)
    return res.status(401).json({ msg: "Email or Password is incorrect" });

  if (!user.emailConfirmed)
    return res.status(403).json({ msg: "Email is not confirmed" });
  user.password = undefined;
  let token = generateToken({ user });
  res.status(200).json({ msg: "success", token, user });
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
