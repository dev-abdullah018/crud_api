const Product = require("../models/productModel");

const deleteProductController = async (req, res) => {
  const id = req.params.id;
   
  try {
    
    const product = await Product.findByIdAndDelete(id);
    res.status(202).json(product)

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = deleteProductController;
