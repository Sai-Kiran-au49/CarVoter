const UserModel = require("../models/UserModel");

const jwt = require("jsonwebtoken");

const signupPost = async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    const newUser = await UserModel.create({
      name,
      email,
      password,
      phone,
    });
    res.status(201).send({ status: "201", msg: "Signup is successfull" });
  } catch (err) {
    res.status(400).send({ status: "Please check the details entered" });
    console.log(err);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  console.log(email);
  console.log(password);

  try {
    const user = await UserModel.findOne({ email, password });
    console.log(user);
    if (user) {
      const token = jwt.sign({ email }, process.env.secret, {
        expiresIn: "1d",
      });
      res.cookie("jwt", token);
      res.status(201).json({ status: "Success", msg: "Logged in successfully" });
      return;
    } else {
      throw "Invalid credentials";
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({ status: "Error", msg: "Invalid Credentials" });
  }
};

const logout = (req, res) => {
  res.clearCookie("jwt");
  res.json({ msg: "Logged Out Successfully" });
};

module.exports = {
  signupPost,
  login,
  logout,
};
