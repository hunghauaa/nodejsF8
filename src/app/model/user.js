const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    password: {type : String, maxlength:50},
    email: {type : String, maxlength:50, unique:true},
    phoneNumber: {type : Number, maxlength : 10},
  },{
    timestamps: true,
  });
module.exports = mongoose.model('User',User)
