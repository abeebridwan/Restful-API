const express = require("express");  
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();


const MONGO_URL = process.env.MONGO_URL_TEST;
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
};

//middleware
app.use('/', (res, req, next) => {
 console.log("This is a middleware")
 next()
});

//route
app.get('/', (req, res) => {
    res.send('we are on home'); 
});

//database connection
mongoose.connect(MONGO_URL, options, () => {
    console.log("connected to Mongodb")
});

//listen
app.listen(3000);
