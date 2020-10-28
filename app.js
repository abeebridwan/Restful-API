const express = require("express");  
const app = express();
// const mongoose = require('mongoose');

// require('dotenv').config();


// const MONGO_URL = process.env.MONGO_URL_TEST;
// const options = {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   };

//middleware
app.use('/', () => {
 console.log("This is a middleware")
})

//route
app.get('/', (req, res) => {
    res.send('we ar on home'); 
});

// database connection
// mongoose.connect(MONGO_URL, () => {
//     console.log("connected to Mongodb")
// });

//listen
app.listen(3000);
