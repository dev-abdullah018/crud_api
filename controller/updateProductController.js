const Product = require("../models/productModel");


const updateProductController = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;

  const newProduct = {
    title: title,
    description: description,
    userId: req.userId,
  };

   try {
    await Product.findByIdAndUpdate(id, newProduct, {new : true})
    res.status(200).json(newProduct)
    
   } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
   }
};


module.exports = updateProductController