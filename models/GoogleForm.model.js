const { Schema, model } = require('mongoose');

const GoogleFormSchema = new Schema({
    emailChecked: {
        type: String || Boolean,

    },

    loggedInEmail: {
        type: String,
        required: true,
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

    },
    alternateContactNumber: {
        type: String,
        required: true,

    },
    emailID: {
        type: String,
        required: true,

    },
    dateOfBirth: {
        type: Date,
        required: true,

    },
    age: {
        type: Number,
        required: true,

    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Prefer Not To Say'],

    },
    maritalStatus: {
        type: String,
        required: true,
        enum: ['Married', 'Unmarried', 'Prefer Not To Say'],

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
        type: String, required: true

    },
    permanentResidentialAddress: {
        type: String, required: true
    },
    currentLocation: {
        type: String, required: true
    },
    preferredLocation: {
        type: String, required: true
    },
    passport: {
        type: String, required: true, enum: ['YES', 'NO'],
    },

    passportNumber: {
        type: String,
    },
    passportCopy: {
        type: String,

    },
    adhaarCardNumber: {
        type: String, required: true, unique: true,
    },
    adharCardCopy: {
        type: String,
    },
    panCardNumber: {
        type: String, required: true, unique: true,
    },
    panCardCopy: {
        type: String,
    },
    drivingLicenseDetails: {
        type: String, enum: ['YES', 'NO']
    },
    drivingLicenseCopy: {
        type: String,
    },
    voterIdDetails: {
        type: String, enum: ['YES', 'NO']
    },
    voterIdCopy: {
        type: String,
    },
    photograph: {
        type: String, required: true
    },
    linkedIn: {
        type: String, required: true
    },
    resume: {
        type: String, required: true
    },
    socialLinks: {
        type: String, required: true
    },
    onlinePortfolioLink: {
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
    specialization: {
        type: String, required: true
    },
    educationInstitution: {
        type: String, required: true
    },
    yearOfCompletion: {
        type: Date, required: true
    },

    passPercentage: {
        type: String,
        required: true
    },
    proofOfEducationCompletion: {
        type: String, required: true
    },
    anyCertifications: {
        type: String, required: true, enum: ['YES', 'NO'],
    },
    certificationsObtained: {
        type: String, required: true
    },
    certificationIssuingAuthority: {
        type: String, required: true
    },
    certificationCompletionDate: {
        type: Date, required: true
    },
    proofOfCertification: {
        type: String, required: true
    },
    dateOfJoin: {
        type: Date, required: true
    },
    fresher: {
        type: String, required: true, enum: ['YES', 'NO']
    },

    totalExperience: {
        type: String, required: true,
    },
    organizationName: {
        type: String, required: true,
    },
    jobTitle: {
        type: String, required: true,
    },
    empStartDate: {
        type: Date, required: true,
    },
    empEndDate: {
        type: Date, required: true,
    },
    rolesAndResponsibilities: {
        type: String, required: true,
    },
    reasonForLeaving: {
        type: String, required: true,
    },
    currentCTC: {
        type: String, required: true,
    },
    expectedCTC: {
        type: String, required: true,
    },
    noticePeriod: {
        type: String, required: true,
    },
    salarySlips: {
        type: String, required: true,
    },
    bankStatements: {
        type: String, required: true,
    },
    offerLetter: {
        type: String, required: true,
    },
    incrementLetter: {
        type: String, required: true,
    },
    experienceCertificate: {
        type: String, required: true,
    },


    servingNoticePeriod: {
        type: String, required: true, enum: ['YES', 'NO',],
    },
    lastWorkingDate: {
        type: Date, required: true,
    },
    anyExistingOffers: {
        type: String, required: true, enum: ['YES', "NO", 'MAYBE'],
    },
    existingOfferOrganizationName: {
        type: String, required: true,
    },
    proofOfExistingOffer: {
        type: String, required: true,
    },
    haveYouAcceptedTheOffer: {
        type: String, required: true, 
    },
    dateAcceptedTheOffer: {
        type: Date, required: true,
    },
    proposedCTC: {
        type: String, required: true,
    },
    referenceContactPersonName: {
        type: String, required: true,
    },
    referenceContactPersonDesignation: {
        type: String, required: true,
    },
    referenceContactPersonContact: {
        type: String, required: true,
    },
    referenceContactPersonEmailID: {
        type: String, required: true,
    },
    referenceContactPersonProfessionalRelationship: {
        type: String, required: true,
    },
    referenceCheckDate: {
        type: Date, required: true,
    },
    employmentVerificationConsent: {
        type: String, required: true, enum: ['YES', "NO", 'MAYBE'],
    },
    authorizationToContactReferences: {
        type: String, required: true, enum: ['YES', "NO", 'MAYBE'],
    },
    backgroundChecks: {
        type: String, required: true, enum: ['YES', 'NO', 'MAY BE']
    },
    drugAndAlcoholTest: {
        type: String, required: true, enum: ['YES', 'NO', 'MAY BE']
    },
    criminalCases: {
        type: String, required: true, enum: ['YES', 'NO',],
    },
    detailsOfCriminalCases: {
        type: String, required: true,
    },
    acknowledge: {
        type: String, required: true, enum: ['YES', 'NO',],
    }

});


const GoogleFormModel = model('FormsData', GoogleFormSchema);
module.exports = GoogleFormModel; 