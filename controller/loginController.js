const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const loginController = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return res.status(400).json({ message: "Please include a valid email" });
    }
  
    try {
      const existingUser = await User.findOne({ email: email });
      if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      const matchPassword = await bcrypt.compare(password, existingUser.password);
      if (!matchPassword) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ user: existingUser, token: token });
  
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  module.exports = loginController;