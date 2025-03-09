const jwt = require("jsonwebtoken");
const ProductModel = require("../models/Product");
require("dotenv").config();
const secret = process.env.SECRET;

// Create Post controller
exports.createProduct = async (req, res) => {
  /**
    #swagger.tags = ['Product']
    #swagger.summary = "Create a new product"
    #swagger.description = 'Endpoint to create a new product'
    #swagger.consumes = ['multipart/form-data']
    #swagger.parameters['file'] = {
       in:'formData',
       type:'file',
       required:true,
       description:'Image to upload to Firebase Storage and get its url'
    }
    #swagger.requestBody = {
       required:true,
       content:{
         "multipart/form-data":{
           schema:{
             $ref:"#components/schemas/NewProduct"
           }
         }
       }
    }
    #swagger.response[200] = {
       schema:{ "$ref": "#components/schemas/ProductResponse"},
       description: "Product created successfully"
    }
   */

  //File upload
  if (!req.file) {
    return res.status(400).json({ message: "Image is required" });
  }
  const firebaseUrl = req.file.firebaseUrl;

  const { name, description, category, price } = req.body;
  if (!name || !description || !category || !price) {
    return res.status(400).json({ message: "All Fields is requires" });
  }

  try {
    const productDoc = await ProductModel.create({
      name,
      description,
      category,
      price,
      image: firebaseUrl,
    });
    if (!productDoc) {
      res.status(400).send({
        message: "Cannot create new post!",
      });
      return;
    }
    res.json(productDoc);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Something error occurred while creating a new post.",
    });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    if (!products) {
      res.status(400).send({
        message: "Product not found!",
      });
      return;
    }
    res.json(products);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({
      message: "Something error occurred while retrieving products",
    });
  }
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const productDoc = await ProductModel.findById(id);
    if (!productDoc) {
      res.status(404).send({
        message: "Product not found",
      });
      return;
    }
    res.json(productDoc);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      message: "Something error occurred while getting product details",
    });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res.status(404).json({ message: "Product id is not Provided" });
  try {
    const productDoc = await ProductModel.findById(id);
    if (!productDoc) {
      res.status(404).send({
        message: "You Cannnot update this product",
      });
      return;
    }

    const { name, description, category, price } = req.body;
    if ((!name || !description || !category, !price)) {
      return res.status(400).json({ message: "All fields are required" });
    }
    productDoc.name = name;
    productDoc.description = description;
    productDoc.category = category;
    productDoc.price = price;
    if (req.file) {
      productDoc.image = req.file.firebaseUrl;
    }
    await productDoc.save();
    res.json(productDoc);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Somthing error occurrend white updating a product",
    });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  //const authorId = req.userId;
  try {
    const productDoc = await ProductModel.findById(id);

    if (!productDoc) {
      return res.status(404).send({
        message: "Post not found",
      });
    }

    // if (authorId !== productDoc.author.toString()) {
    //   return res.status(403).send({
    //     message: "You are not authorized to delete this post",
    //   });
    // }

    await ProductModel.findByIdAndDelete(id);

    res.status(200).send({
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({
      message: error.message || "An error occurred while deleting the product",
    });
  }
};

// Get posts by userId
exports.getPostByAuthor = async (req, res) => {
  const { id } = req.params;
  try {
    const postDoc = await PostModel.find({ author: id }).populate("author", [
      "username",
    ]);
    if (!postDoc) {
      return res.status(404).send({
        message: "Post Not Found!",
      });
    }
    res.json(postDoc);
  } catch (error) {
    res.status(500).send({
      message: "Something went wrong while getting post by author!",
    });
  }
};