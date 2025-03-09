const CartModel = require("../models/Cart");

exports.createCart = async (req, res) => {
  /*
    #swagger.tags = ['Carts']
    #swagger.summary = "Add a Cart Item"
    #swagger.description = 'Endpoint to Create Cart'
  */
  const { productId, name, email, image, quantity, price } = req.body;
  if (!productId || !name || !email || !image || !quantity || !price) {
    return res.status(400).json({ message: "Product information is missing" });
  }
  try {
    //Existing item in out cart
    const existingItem = await CartModel.findOne({ productId, email });
    if (existingItem) {
      existingItem.quantity += quantity;
      const data = await existingItem.save();
      return res.send(data);
    }
    //add item to cart for the first time
    const cart = new CartModel({
      productId,
      name,
      email,
      image,
      quantity,
      price,
    });
    const data = await cart.save();
    res.send(data);
  } catch (error) {
    res.status(500).json({
      message:
        error.message || "Something error occurred white adding new cart item",
    });
  }
};

exports.getAllCart = async (req, res) => {
  try {
    const cartItems = await CartModel.find();
    if (!cartItems || cartItems.length === 0) {
      return res.status(404).json({ message: "Cart not found!" });
    }
    res.json(cartItems);
  } catch {
    res.status(500).json({
      message: "Something error occurred while retrieving the cart!",
    });
  }
};

exports.getCart = async (req, res) => {
  const { email } = req.params;
  if (!email) {
    return res.status(400).json({ message: "Email is missing!" });
  }
  try {
    const cartItems = await CartModel.find({ email });
    if (!cartItems) {
      return res.status(404).json({ message: "Cart not found!" });
    }
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({
      message: "Something error occurred while retrieving the cart!",
    });
  }
};

exports.updateCartItem = async (req, res) => {
  const { id } = req.params;
  try {
    const cartItems = await CartModel.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
    });
    if (!cartItems) {
      return res.status(404).json({ message: "Cart not found!" });
    }
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({
      message: "Something error occurred while updating cart items by email!",
    });
  }
};

exports.deleteCartItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const cartItems = await CartModel.findByIdAndDelete(id);
    if (!cartItems) {
      return res.status(404).json({ message: "Cart not found!" });
    }
    res.json({ message: "Cart item deleted successfully!" });
  } catch (error) {
    res.status(500).json({
      message: "Something error occurred while deleting cart items by email!",
    });
  }
};

exports.clearAllItem = async (req, res) => {
  const { email } = req.params;
  if (!email) {
    return res.status(400).json({ message: "Email is missing!" });
  }
  try {
    const cart = await CartModel.deleteMany({ email });
    if (cart.deletedCount === 0) {
      return res.status(404).json({ message: "No items to clear!" });
    }
    res.status(200).json({ message: "Cart is Empty!" });
  } catch (error) {
    res.status(500).json({
      message: "Something error occurred while deleting cart items by email!",
    });
  }
};