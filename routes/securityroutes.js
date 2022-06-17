/*imports the express module*/
const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');


router.get("/", controller.landing_page);

//error messages below for if any issue occurs to be returned to the user.

router.use(function(req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not found.');
    })
    router.use(function(err, req, res, next) {
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error.');
    })
    
    module.exports = router;