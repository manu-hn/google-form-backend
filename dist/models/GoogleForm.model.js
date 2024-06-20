const {
  Schema,
  model
} = require('mongoose');
const GoogleFormSchema = new Schema({
  emailChecked: {
    type: String || Boolean
  },
  loggedInEmail: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  middleName: {
    type: String
  },
  lastName: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true,
    unique: true
  },
  alternateContactNumber: {
    type: String,
    required: true
  },
  emailID: {
    type: String,
    required: true,
    unique: true
  },
  dateOfBirth: {
    type: Date,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Prefer Not To Say']
  },
  maritalStatus: {
    type: String,
    required: true,
    enum: ['Married', 'Unmarried', 'Prefer Not To Say']
  },
  nationality: {
    type: String,
    required: true
  },
  bloodGroup: {
    type: String,
    required: true
  },
  currentResidentialAddress: {
    type: String,
    required: true
  },
  permanentResidentialAddress: {
    type: String,
    required: true
  },
  currentLocation: {
    type: String,
    required: true
  },
  preferredLocation: {
    type: String,
    required: true
  },
  passport: {
    type: String,
    required: true,
    enum: ['YES', 'NO']
  },
  passportNumber: {
    type: String,
    required: true
  },
  passportCopy: {
    type: String
  },
  adhaarCardNumber: {
    type: String,
    required: true,
    unique: true
  },
  adharCardCopy: {
    type: String,
    required: true
  },
  panCardNumber: {
    type: String,
    required: true,
    unique: true
  },
  panCardCopy: {
    type: String,
    required: true
  },
  drivingLicenseDetails: {
    type: String,
    enum: ['YES', 'NO']
  },
  drivingLicenseCopy: {
    type: String
  },
  voterIdDetails: {
    type: String,
    enum: ['YES', 'NO']
  },
  voterIdCopy: {
    type: String
  },
  photograph: {
    type: String,
    required: true
  },
  linkedIn: {
    type: String,
    required: true
  },
  resume: {
    type: String,
    required: true
  },
  socialLinks: {
    type: String,
    required: true
  },
  onlinePortfolioLink: {
    type: String,
    required: true
  },
  skills: {
    type: String,
    required: true
  },
  languagesKnown: {
    type: String,
    required: true
  },
  educationCourse: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  educationInstitution: {
    type: String,
    required: true
  },
  yearOfCompletion: {
    type: Date,
    required: true
  },
  passPercentage: {
    type: String,
    required: true
  },
  proofOfEducationCompletion: {
    type: String,
    required: true
  },
  anyCertifications: {
    type: String,
    required: true,
    enum: ['YES', 'NO']
  },
  certificationsObtained: {
    type: String,
    required: true
  },
  certificationIssuingAuthority: {
    type: String,
    required: true
  },
  certificationCompletionDate: {
    type: Date,
    required: true
  },
  proofOfCertification: {
    type: String,
    required: true
  },
  dateOfJoin: {
    type: Date,
    required: true
  },
  fresher: {
    type: String,
    required: true,
    enum: ['YES', 'NO']
  },
  backgroundChecks: {
    type: String,
    required: true,
    enum: ['YES', 'NO', 'MAY BE']
  },
  drugAndAlcoholTest: {
    type: String,
    required: true,
    enum: ['YES', 'NO', 'MAY BE']
  },
  criminalCases: {
    type: String,
    required: true,
    enum: ['YES', 'NO']
  },
  detailsOfCriminalCases: {
    type: String,
    required: true
  },
  acknowledge: {
    type: String,
    required: true,
    enum: ['YES', 'NO']
  }
});
const GoogleFormModel = model('FormsData', GoogleFormSchema);
module.exports = GoogleFormModel;