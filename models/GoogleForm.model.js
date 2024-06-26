const { Schema, model } = require('mongoose');

const GoogleFormSchema = new Schema({
    emailChecked: {
        type: Schema.Types.Mixed,

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
        unique: false,

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
        type: String, required: true, default: "N/A"
    },
    organizationName: {
        type: String, required: true, default: "N/A"
    },
    jobTitle: {
        type: String, required: true, default: "N/A"
    },
    empStartDate: {
        type: Schema.Types.Mixed, required: true, default: 'N/A',
    },
    empEndDate: {
        type: Schema.Types.Mixed, required: true, default: 'N/A',
    },
    rolesAndResponsibilities: {
        type: String, required: true, default: "N/A"
    },
    reasonForLeaving: {
        type: String, required: true, default: "N/A"
    },
    currentCTC: {
        type: String, required: true, default: "N/A"
    },
    expectedCTC: {
        type: String, required: true, default: "N/A"
    },
    noticePeriod: {
        type: String, required: true, default: "N/A"
    },
    salarySlips: {
        type: String, required: true, default: "N/A"
    },
    bankStatements: {
        type: String, required: true, default: "N/A"
    },
    offerLetter: {
        type: String, required: true, default: "N/A"
    },
    incrementLetter: {
        type: String, required: true, default: "N/A"
    },
    experienceCertificate: {
        type: String, required: true, default: "N/A"
    },


    servingNoticePeriod: {
        type: String, required: true, enum: ['YES', 'NO',], default: "NO"
    },
    lastWorkingDate: {
        type: Schema.Types.Mixed, required: true, default: 'N/A',
    },
    anyExistingOffers: {
        type: String, required: true, enum: ['YES', "NO", 'MAYBE'], default: "NO"
    },
    existingOfferOrganizationName: {
        type: String, required: true, default: "N/A"
    },
    proofOfExistingOffer: {
        type: String, required: true, default: "N/A"
    },
    haveYouAcceptedTheOffer: {
        type: String, required: true, default: "N/A"
    },
    dateAcceptedTheOffer: {
        type: Date, required: true, default: new Date(),
    },
    proposedCTC: {
        type: String, required: true, default: "N/A"
    },
    referenceContactPersonName: {
        type: String, required: true, default: "N/A"
    },
    referenceContactPersonDesignation: {
        type: String, required: true, default: "N/A"
    },
    referenceContactPersonContact: {
        type: String, required: true, default: "N/A"
    },
    referenceContactPersonEmailID: {
        type: String, required: true, default: "N/A"
    },
    referenceContactPersonProfessionalRelationship: {
        type: String, required: true, default: "N/A"
    },
    referenceCheckDate: {
        type: Date, required: true, default: new Date(),
    },
    employmentVerificationConsent: {
        type: String, required: true, enum: ['YES', "NO", 'MAYBE'], default: "NO"
    },
    authorizationToContactReferences: {
        type: String, required: true, enum: ['YES', "NO", 'MAYBE'], default: "NO"
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