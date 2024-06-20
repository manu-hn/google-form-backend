const express = require('express');
require('module-alias/register');
const {
  userGoogleAuthentication
} = require("@controller/UserData.controller.js");
const router = express.Router();
router.post('/google-sign-in', userGoogleAuthentication);
module.exports = router;