// userRouter para userController

const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController')

router.get('user/', controller.get);
router.post('user/', controller.post);
router.put('user/:id', controller.put);
router.delete('user/:id', controller.delete);


module.exports = router;

