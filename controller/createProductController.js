const Product = require("../models/productModel");

const createProductController = async (req, res) => {
  const { title, description } = req.body;

  try {
    const existingProduct = await Product.findOne({ 
      $or: [
        { title: title },
        { description: description }
      ]
     });

    if (existingProduct) {
      return res.status(400).json({ message: "It's already exists" });
    }

    // Create a new product if it does not exist
    const newProduct = new Product({
      title: title,
      description: description,
      userId: req.userId,
    });

    await newProduct.save();
    res.status(201).json(newProduct);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = createProductController;