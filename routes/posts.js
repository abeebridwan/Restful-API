const express = require("express");  
const router = express.Router();

router.get('/', (req, res,) => {
    res.send('we are on post')
});

router.get('/specific', (req, res,) => {
    res.send('we are on specific')
});

module.exports = router;