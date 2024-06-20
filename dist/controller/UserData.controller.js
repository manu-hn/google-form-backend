const UserDataModel = require("../models/UserData.model.js");
const {
  StatusCodes: {
    OK,
    CREATED,
    SERVICE_UNAVAILABLE,
    BAD_REQUEST
  }
} = require('http-status-codes');
const userGoogleAuthentication = async (request, response, next) => {
  try {
    const {
      email,
      name
    } = request.body;
    console.log(request.body);
    const isUserAvailable = await UserDataModel.findOne({
      email
    });
    if (!isUserAvailable) {
      const newUser = await UserDataModel.create({
        firstName: name,
        lastName: name,
        fullName: name,
        email: email
      });
      return response.status(CREATED).json({
        error: false,
        message: 'User Created Successfully !',
        data: newUser
      });
    } else {
      response.status(OK).json({
        error: false,
        statusCode: OK,
        message: "Login Successful",
        data: isUserAvailable
      });
    }
  } catch (error) {
    response.status(BAD_REQUEST).json({
      error: true,
      message: error.message
    });
    next(error);
  }
};
module.exports = {
  userGoogleAuthentication
};