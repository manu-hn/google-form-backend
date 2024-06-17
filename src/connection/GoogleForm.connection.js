const { connect } = require('mongoose');
const dotenv = require('dotenv').config();

connect(process.env.MONGODB_CONNECTION_URL).then(() => {
    console.log(`MongoDB Connected`)
}).catch((err) => {
    console.error(err);
})