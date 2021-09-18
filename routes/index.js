const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('./welcome.ejs', {
        username: req.username
    });
});


module.exports = router;

