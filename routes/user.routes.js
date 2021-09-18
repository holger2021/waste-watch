const express = require('express');
const router = express.Router();

import * as userController from "../controllers/user.controller";

router.get('/', userController.loginGet);

// login handle
router.post('/', userController.loginPost);

router.get('/logout', userController.logout);

module.exports = router;

