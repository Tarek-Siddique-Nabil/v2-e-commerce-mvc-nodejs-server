const express = require('express');
const router = express.Router();
const userOrderController = require('../controllers/userOrder.controllers');

router.post('/', userOrderController.createUserOrder);
router.put('/:id', userOrderController.updateOrderStatus);
router.get('/', userOrderController.getAllOrders);
router.get('/:email', userOrderController.getOrdersByEmail);
router.delete('/:id', userOrderController.deleteOrder);

module.exports = router;
