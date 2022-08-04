const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {type:String,trim:true,required:true,maxLength:25},
    lastName: { type: String, trim: true, required: true,maxLength:25 },
    gender: { type: String, enum:["male","female","other"], required: true },
    email: { type: String, trim: true, required: true, unique: true, lowercase: true },
    password: {type:String,trim:true,required:true,minLength:8},
    mobile: { type: Number, trim: true, required: true, unique: true },
    profileImage: { type: String,required:true},
    address: {street:{type:String,required:true},city:{type:String,required:true},pincode:{type:Number,required:true}}
});

module.exports = mongoose.model('user', userSchema);