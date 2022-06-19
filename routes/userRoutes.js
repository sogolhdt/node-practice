const express = require('express');

const userController = require('./../controllers/userController');
const router = express.Router();

router.route('/signup').post(userController.signup);
router.route('/code').post(userController.userValidationWithCode);
router.route('/:id').get(userController.getUser);
router.route('/setPassword').post(userController.setPassword);
module.exports = router;