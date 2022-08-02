const express = require('express');
const router = express.Router();

router.get('/test', function (req, res) {
    console.log("Hello World!");
    res.send("Hello World!");
});

router.post('/create', function (req, res) {
    let data = req.body
    console.log(data);
    res.send(data);
});

module.exports = router;