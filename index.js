const express = require('express');
const { config } = require('dotenv');
require('module-alias/register');
require("@connection/GoogleForm.connection.js");
const { StatusCodes: { NOT_FOUND } } = require('http-status-codes');
const cors = require('cors');
config();
const PORT = process.env.CONNECTION_PORT || 5000;


const app = express();

app.use(express.json());
app.use(cors());



app.use('*', (req, res) => {
    res.status(NOT_FOUND).json({ error: true, message: 'Page Not Found !' });

});


app.listen(PORT, () => {
    console.log(`Server Started at PORT Number ${PORT}`)
});