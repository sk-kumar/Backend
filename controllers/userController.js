const userModel = require('../models/userModel.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { isValidReqBody, isValidStr, isValidEmail} = require('../validation/validationFunction.js');

const createUser = async (req, res) => {
    let { firstName, lastName,gender,email, password, mobile } = req.body
    if (!isValidReqBody(req.body)) {
        return res.status(400).send({ message: "All field are required" });
    }
    if (!isValidStr(firstName)) {
        return res.status(400).send({ message: "FirstName is  required" });
    }
    if (!isValidStr(lastName)) {
        return res.status(400).send({ message: "LastName is  required" });
    }
    if (!isValidStr(gender)) {
        return res.status(400).send({ message: "Gender is  required" });
    }
    let allGender = ["male", "female", "other"]
    if (!allGender.includes(gender)) {
        return res.status(400).send({ message: "Gender is  not valid" });
    }
    if (!isValidStr(email)) {
        return res.status(400).send({ message: "Email is  required" });
    }
    if (!isValidEmail(email)) {
        return res.status(400).send({ message: "Email is not valid" });
    }
    let userEmail = await userModel.findOne({ email });
    if (userEmail) {
        return res.status(400).send({ message: "Email Id already registered" });
    }
    if (!isValidStr(password)) {
        return res.status(400).send({ message: "Password is  required" });
    }
    let hashPassword = await bcrypt.hash(password, 10);
    if (!mobile) {
        return res.status(400).send({ message: "Mobile Number is  required" });
    }
    let userMobile = await userModel.findOne({ mobile });
    if (userMobile) {
        return res.status(400).send({ message: "Mobile already registered" });
    }
    let data = await userModel.create({ firstName, lastName,gender, email, password: hashPassword, mobile });
    // console.log(data);
    res.status(201).send(data);
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

