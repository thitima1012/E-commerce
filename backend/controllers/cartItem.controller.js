const CartModel = require("../models/Cart");

exports.createCart = async (req, res) =>{
  /**
    #swagger.tags = ['Cart']
    #swagger.summary = "Create a new Cart"
    #swagger.description = 'Endpoint to create a new Cart'
 */
    const {productId, name, price, image, quantity, email} = req.body;
    if(!productId || !name || !price || !image || !quantity || !email) {
        res.status(400).json({message: "Product information is missing! "});
        return;
    }
    try{
        //Existing item in our cart
        const existingItem = await CartModel.findOne({ productId, email});
        if(existingItem){
            existingItem.quantity += quantity
            const data = await existingItem.save();
            return res.json(data);
        }
        //add item to cart for the fist time
        const cart = new CartModel({
            productId, 
            name, 
            price, 
            image, 
            quantity, 
            email,
        });
        const data = await cart.save();
        res.send(data);
    }catch (error) {
        res.status(500).send({
            message:
              error.massage || "Something error occurred while getting all carts",
          });
    }
};

exports.getAllCartItems = async (req, res) => {
  /**
    #swagger.tags = ['Cart']
    #swagger.summary = "get All Cart Items"
    #swagger.description = 'Endpoint to get All Cart Items'
 */
    try {
        const cartItems = await CartModel.find();
        if (cartItems.length === 0 || !cartItems) {
          return res.status(404).json({ message: "Cart is empty" });
        }
        res.json(cartItems);
      } catch (error) {
        res.status(500).send({
          message:
            error.massage || "Something error occurred while retrieving cart Items",
        });
      }
};

exports.getCartItemByEmail = async (req, res) => {
  /**
    #swagger.tags = ['Cart']
    #swagger.summary = "get Cart Item By Email"
    #swagger.description = 'Endpoint to get Cart Item By Email'
 */
    const { email } = req.params;
  if (!email) {
    res.status(400).json({ message: "Email is missing!" });
    return;
  }
  try {
    const cartItems = await CartModel.find({ email });
    if (cartItems.length === 0 || !cartItems) {
      return res.status(404).json({ message: "Cart is empty" });
    }
    res.json(cartItems);
  } catch (error) {
    res.status(500).send({
      message:
        error.massage || "Something error occurred while deleting this item",
    });
  }
};

exports.updateCartItem = async (req, res) => {
      /**
    #swagger.tags = ['Cart']
    #swagger.summary = "update Cart Item"
    #swagger.description = 'Endpoint to update Cart Item'
 */
const { id } = req.params;
if (!id) {
  return res.status(404).json({ message: "Cart id is not found" });
}
try {
  const cartItem = await CartModel.findByIdAndUpdate(id, req.body, {
    new: true,
    useFindAndModify: false,
  });
  if (!cartItem) {
    return res.status(404).json({ message: "Cart Item not found" });
  }
  res.json(cartItem);
} catch (error) {
  res.status(500).send({
    message:
      error.massage || "Something error occurred while updating a cart Item",
  });
}
};

exports.removeAllItems = async (req, res) => {
   /**
    #swagger.tags = ['Cart']
    #swagger.summary = "remove All Items"
    #swagger.description = 'Endpoint to remove All Items'
 */
const { email } = req.params;
if (!email) {
  return res.status(404).json({ message: "Email is not found" });
}
try {
  const cart = await CartModel.deleteMany({ email });
  if (cart.deletedCount > 0) {
    return res.status(404).json({ message: "Cart is cleared" });
  }
  if (!cart) {
    return res.status(404).json({ message: "Cart not found" });
  }
  res.status(200).json({ message: "Cart is empty" });
} catch (error) {
  res.status(500).send({
    message:
      error.massage || "Something error occurred while clearing a cart",
  });
}
};

exports.removeItemById = async (req, res) => {
       /**
    #swagger.tags = ['Cart']
    #swagger.summary = "remove Item By Id "
    #swagger.description = 'Endpoint to remove Item By Id '
 */
const { id } = req.params;
try {
 const cartItem = await CartModel.findById(id);
 if (!cartItem) {
   return res.status(404).json({ message: "Item not found" });
 }
 await CartModel.deleteOne();
 res.json(cartItem);
} catch (error) {
 res.status(500).send({
   message:
     error.massage || "Something error occurred while deleting a Item",
 });
}
};
