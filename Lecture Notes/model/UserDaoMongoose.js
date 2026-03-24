const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    login: {type: String, required: true, alias:'email'},
    password: String,
    permission: Number,
    creation: {type: Date, default: Date.now}


});