require('module-alias/register');
const GoogleFormModel = require("@model/GoogleForm.model.js");
const { StatusCodes: { } } = require('http-status-codes');


const submitGoogleFormDetails = async (req, res, next) => {
    try {
        console.log(req.body)

        const submittedFormDetails = await GoogleFormModel.create(req.body);
        res.status(200).json({ message: "Hello, This is working", submittedFormDetails })
    } catch (error) {
        next('Hello This is Error')
        console.error(error);
    }
}


module.exports = {
    submitGoogleFormDetails
}