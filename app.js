const express = require("express");  
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 

require('dotenv').config();

//Routes
const postsRoutes = require('./routes/posts');


const MONGO_URL = process.env.MONGO_URL_TEST;
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
};

//middleware

app.use(bodyParser.json());

app.use('/posts', postsRoutes)

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
