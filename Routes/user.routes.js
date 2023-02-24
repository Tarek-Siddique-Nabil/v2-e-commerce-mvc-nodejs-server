const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controllers');

// Create a new user
router.post('/', userController.createUser);

// Get all users
router.get('/', userController.getUsers);

// Get user by email
router.get('/:email', userController.getUserByEmail);

// Update user by email
router.put('/:email', userController.updateUser);

// Delete user by email
router.delete('/:email', userController.deleteUser);

module.exports = router;
