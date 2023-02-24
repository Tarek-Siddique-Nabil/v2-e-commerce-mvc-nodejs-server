const UserOrder = require('../models/userOrder.models');

const createUserOrder = async (req, res) => {
  try {
    const userOrderData = req.body;
    const userOrder = await UserOrder.create(userOrderData);
    res.send(userOrder);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const userOrder = await UserOrder.findById(id);
    if (!userOrder) {
      return res.status(404).send({ message: 'Order not found' });
    }

    userOrder.status = status;
    await userOrder.save();

    res.send(userOrder);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await UserOrder.find().sort({ time: -1 });
    res.send(orders);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const getOrdersByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const orders = await UserOrder.find({ email }).sort({ time: -1 });
    res.send(orders);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrder = await UserOrder.findByIdAndDelete(id);
    if (!deletedOrder) {
      return res.status(404).send({ message: 'Order not found' });
    }
    res.send(deletedOrder);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

module.exports = {
  createUserOrder,
  updateOrderStatus,
  getAllOrders,
  getOrdersByEmail,
  deleteOrder
};
