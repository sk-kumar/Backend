const express = require('express');
const router = express.Router();

router.get('/test', function (req, res) {
    console.log("Hello World!");
    res.send("Hello World!");
});

module.exports = router;