const express = require('express');
const { config } = require('dotenv');
require('module-alias/register');
require("@connection/GoogleForm.connection.js");
const GoogleFormROutes = require("@routes/GoogleForm.routes.js");
const { StatusCodes: { NOT_FOUND, INTERNAL_SERVER_ERROR },  } = require('http-status-codes');
const cors = require('cors');
config();
const PORT = process.env.CONNECTION_PORT || 5000;


const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/form', GoogleFormROutes);


// Middleware to Handle Page Not Found - 404 Errors
app.use('*', (req, res) => {

    res.status(NOT_FOUND).json({ error: true, message: 'Page Not Found !' });

});


//General Error Handling Middleware
app.use((err, req, res, next) => {
   
    res.status(INTERNAL_SERVER_ERROR).json({ error: true, message: err });
});


app.listen(PORT, () => {
    console.log(`Server Started at PORT Number ${PORT}`)
});