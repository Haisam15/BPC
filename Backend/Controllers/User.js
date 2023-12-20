import UserSchema from "../Models/User.js";
import { model } from "mongoose"; 
import bcrypt from "bcrypt";
import { use } from "bcrypt/promises.js";

const User = model("User", UserSchema);

const Login = async (req, res) => {
  const { email, password } = req.body;

  
  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).send("User not found");
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).send("Invalid credentials");
    }

    return res.status(200).send(user.toJSON());

  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const investorSignup = async (req, res) => {
  const {
    firstName,
    lastName,
    cnic,
    email,
    password,
    phone,
    address,
    city,
    country,
    postalCode,
    role,
  } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      firstName,
      lastName,
      cnic,
      email,
      password: hashedPassword,
      phone,
      address,
      city,
      country,
      postalCode,
      role,
    });

    await newUser.save();

    return res.status(201).send(newUser);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const entrepreneurSignup = async (req, res) => {
  const {
    firstName,
    lastName,
    cnic,
    email,
    password,
    phone,
    address,
    city,
    country,
    postalCode,
    role,
    businessPlan,
    businessDescription,
  } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      firstName,
      lastName,
      cnic,
      email,
      password: hashedPassword,
      phone,
      address,
      city,
      country,
      postalCode,
      role,
      businessPlan,
      businessDescription,
    });

    await newUser.save();

    return res.status(201).send(newUser);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const skilledPersonSignup = async (req, res) => {
  const {
    firstName,
    lastName,
    cnic,
    email,
    password,
    phone,
    address,
    city,
    country,
    postalCode,
    role,
  } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      firstName,
      lastName,
      cnic,
      email,
      password: hashedPassword,
      phone,
      address,
      city,
      country,
      postalCode,
      role,
    });

    await newUser.save();

    return res.status(201).send(newUser);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export { Login, investorSignup, entrepreneurSignup, skilledPersonSignup };
