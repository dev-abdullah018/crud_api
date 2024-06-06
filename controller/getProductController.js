const Product = require("../models/productModel");

const getProductController = async (req, res) => {
    try {
      const products = await Product.find({ userId: req.userId });
      res.status(200).json(products);
  
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  module.exports = getProductController;