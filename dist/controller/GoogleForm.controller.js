require('module-alias/register');
const GoogleFormModel = require("@model/GoogleForm.model.js");
const {
  StatusCodes: {
    OK
  }
} = require('http-status-codes');
const submitGoogleFormDetails = async (req, res, next) => {
  try {
    const submittedFormDetails = await GoogleFormModel.create(req.body);
    return res.status(OK).json({
      message: "Form Submitted Successfully",
      submittedFormDetails
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
module.exports = {
  submitGoogleFormDetails
};