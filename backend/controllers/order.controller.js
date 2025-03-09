const OrderModel = require("../models/Order");
const ProductModel = require("../models/Product");


exports.getOrder = async (req, res) => {
  try {
    const orders = await OrderModel.find().populate("products.productId"); 
    res.json(orders);
  } catch (error) {
    res.status(500).send({ message: "Error retrieving orders" });
  }
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await OrderModel.findById(id).populate("products.productId"); 
    if (!order) {
      return res.status(404).send({ message: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).send({ message: "Error retrieving order details" });
  }
};

exports.deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await OrderModel.findById(id);
    if (!order) {
      return res.status(404).send({ message: "Order not found!" });
    }
    await order.deleteOne();
    res.json({ message: "Order deleted successfully", order });
  } catch (error) {
    res.status(500).send({ message: "Error deleting order" });
  }
};

exports.updateOrder = async (req, res) => {
  const { id } = req.params;
  const { delivery_status } = req.body;
  try {
    const order = await OrderModel.findById(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    if (!delivery_status) {
      return res.status(400).json({ message: "delivery_status is required" });
    }
    order.delivery_status = delivery_status;
    await order.save();
    res.json(order);
  } catch (error) {
    res.status(500).send({ message: "Error updating order status" });
  }
};