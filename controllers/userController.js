const userModel = require('../models/userModel.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const createUser = async (req, res) => {
    let { firstName, lastName, email, password, mobile } = req.body
    let user = await userModel.findOne({ email });
    if (user) {
        return res.status(400).send({ message: "Email Id already registered" });
    }
    let hashPassword =await bcrypt.hash(password, 10);
    let data = await userModel.create({firstName,lastName,email,password:hashPassword,mobile});
    console.log(data);
    res.send(data);
}

const loginUser = async (req, res) => {
    let { email, password } = req.body
    let user = await userModel.findOne({email});
    if (!user) {
        return res.status(400).send({ message: "Username or Password wrong" });
    }
    let checkPassword = await bcrypt.compare(password,user.password)
    if (!checkPassword) {
        return res.status(400).send({ message: "Username or Password wrong" });
    }
    const token = jwt.sign({ _id: user._id }, 'secretkey', { expiresIn: '1d' });
    res.header('x-auth-key', token);
    res.status(200).send({message:"User login successfull",token:token});
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

module.exports = { createUser, getUser, updateUser, deleteUser,loginUser }

