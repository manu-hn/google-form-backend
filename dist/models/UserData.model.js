const {
  Schema,
  model
} = require('mongoose');
const UserSchame = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
});
const UserDataModel = model('user', UserSchame);
module.exports = UserDataModel;