const express = require('express');
const userModel = require('../models/userModel');
const router = express.Router();

// POST
router.post('/user', async function (req, res) {
    let data = await userModel.create(req.body);
    console.log(data);
    res.send(data);
});

// GET
router.get('/user/:id', async function (req, res) {
    let id = req.params.id
    let user = await userModel.findById(id)
    console.log(user);
    res.send(user);
});

// PUT
router.put('/user/:id', async function (req, res) {
    let id = req.params.id
    let user = await userModel.findByIdAndUpdate(id, { $set: req.body },{new:true});
    console.log(user);
    res.send(user);
})

// DELETE
router.delete('/user/:id', async  function (req, res) {
    let id = req.params.id
    await userModel.findByIdAndDelete(id)
    console.log("User Deleted Successfull");
    res.send("User Deleted Successfull");
})

module.exports = router;