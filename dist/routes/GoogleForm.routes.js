const express = require('express');
require('module-alias/register');
const {
  submitGoogleFormDetails
} = require("@controller/GoogleForm.controller.js");
const router = express.Router();
router.post('/submit', submitGoogleFormDetails);
module.exports = router;