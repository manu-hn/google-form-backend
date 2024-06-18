const { Schema, model } = require('mongoose');

const GoogleFormSchema = new Schema({
    submittedFromEmail: {
        type: String,

    },
    firstName: {
        type: String,
        required: true,

    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: true,

    },
    contactNumber: {
        type: String,
        required: true,
        unique: true
    },
    alternameContactNumber: {
        type: String,
        required: true,
        unique: true
    },
    emailId: {
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
        required: true,
       
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'prefer not to say'],

    },
    maritalStatus: {
        type: String,
        required: true,
        enum: ['married', 'unmarried', 'prefer not to say'],

    },
    nationality: {
        type: String,
        required: true,
    },
    bloodGroup: {
        type: String,
        required: true
    },
    currentResidentialAddress: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipcode: { type: String, required: true },
    },
    permanentResidentialAddress: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipcode: { type: String, required: true },
    },
    currentLocation: {
        type: String, required: true
    },
    preferredLocation: {
        type: String, required: true
    },
    havePassport: {
        type: Boolean, required: true
    },

    passportNumber: {
        type: String, required: true
    },
    passPortCopy: {
        type: String,

    },
    adharCardNumber: {
        type: String, required: true, unique: true,
    },
    adharCardCopy: {
        type: String, required: true
    },
    panCardNumber: {
        type: String, required: true, unique: true,
    },
    panCardCopy: {
        type: String, required: true
    },
    drivingLicense: {
        type: Boolean,
    },
    drivingLicenseCopy: {
        type: String,
    },
    voterIdCardNumber: {
        type: String,
    },
    voterIdCardCopy: {
        type: String,
    },
    photograph: {
        type: String, required: true
    },
    linkedInProfile: {
        type: String, required: true
    },
    resumeUpdated: {
        type: String, required: true
    },
    socialMediaLinks: {
        type: String, required: true
    },
    portfolioWebLink: {
        type: String, required: true
    },
    skills: {
        type: String, required: true
    },

    languagesKnown: {
        type: String, required: true
    },
    educationCourse: {
        type: String, required: true
    },
    educationSpecialization: {
        type: String, required: true
    },
    educationInstitution: {
        type: String, required: true
    },
    educationYearOfCompletion: {
        type: Date, required: true
    },
    educationPercentage: {
        type: String, required: true
    },
    proofOfEducationCompletion: {
        type: String, required: true
    },
    anyCertifications: {
        type: Boolean, required: true
    },
    certificationsObtained: {
        type: String, required: true
    },
    nameOfCertificateIssuingAuthority: {
        type: String, required: true
    },
    certificationYearOfCompletion: {
        type: Date, required: true
    },
    proofOfCertification: {
        type: String, required: true
    },
    expectedJoiningDate: {
        type: Date, required: true
    },
    areYouFresher: {
        type: Boolean, required: true
    },
    consentToConductBackgroundCheck: {
        type: String, required: true, enum: ['true', 'false', 'maybe']
    },
    consentToAlchoholTest: {
        type: String, required: true, enum: ['true', 'false', 'maybe']
    },
    anyCriminalConviction: {
        type: Boolean, required: true, enum: [true, false],
    },
    detailsOfCriminalConviction: {
        type: String, required: true,
    },
    submitFormAndAcknowledge: {
        type: Boolean, required: true, enum: [true, false],
    }

});


const GoogleFormModel = model('FormsData', GoogleFormSchema);
module.exports = GoogleFormModel; 