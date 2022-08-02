const express = require('express');
const router = express.Router();

router.post('/create', function (req, res) {
    let data = req.body
    console.log(data);
    res.send(data);
});

router.get('/get', function (req, res) {
    console.log(req.query);
    res.send(req.query);
});

router.get('/get/:id', function (req, res) {
    let id = req.params.id
    console.log(id);
    res.send(id);
});

router.put('/', function (req, res) {

})

router.delete('/delete', function (req, res) {
    
})

module.exports = router;