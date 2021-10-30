const mongoose = require('mongoose');

//model schema
const locationSchema = mongoose.Schema({
    title:{type:String, unique:true},
    image:{type:String, unique:true},
    username:String,
    desc:{type:String, unique:true},
    price:Number
})

module.exports = mongoose.model('Location', locationSchema);