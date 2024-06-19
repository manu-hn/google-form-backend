require('module-alias/register');
const GoogleFormModel = require("@model/GoogleForm.model.js");
const { StatusCodes: { } } = require('http-status-codes');


const submitGoogleFormDetails = async (req, res, next) => {
    try {

        const submittedFormDetails = await GoogleFormModel.create(req.body);
        res.status(200).json({ message: "Hello, This is working", submittedFormDetails })
    } catch (error) {
        res.status(404).json({ message: "Something Error has Occurred", error })
        next('Hello This is Error')

    }
}


module.exports = {
    submitGoogleFormDetails
}