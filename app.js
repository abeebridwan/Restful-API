const express = require("express");

const app = express();
//middleware
app.use('/', () => {
 console.log("This is a middleware")
})

//route
app.get('/', (req, res) => {
    res.send('we ar on home'); 
});


//listen
app.listen(3000);
