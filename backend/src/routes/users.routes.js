
const express = require('express');
const router = express.Router();
const { registerUser } = require('./../controllers/users.controller');
const validateUserRegistration = require('./../middlewares/validateUserRegistration');

router.post('/users', validateUserRegistration, registerUser);

module.exports = router;
