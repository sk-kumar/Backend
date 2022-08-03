const userModel = require('../models/userModel.js');

const createUser = async  (req, res)=> {
    let data = await userModel.create(req.body);
    console.log(data);
    res.send(data);
}

const getUser = async  (req, res)=>  {
    let id = req.params.id
    let user = await userModel.findById(id)
    console.log(user);
    res.send(user);
}

const updateUser = async  (req, res)=> {
    let id = req.params.id
    let user = await userModel.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    console.log(user);
    res.send(user);
}

const deleteUser = async  (req, res)=> {
    let id = req.params.id
    await userModel.findByIdAndDelete(id)
    console.log("User Deleted Successfull");
    res.send("User Deleted Successfull");
}

module.exports = { createUser, getUser, updateUser, deleteUser }

