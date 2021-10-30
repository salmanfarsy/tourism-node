const mongoose = require('mongoose');

//model schema
const userSchema = mongoose.Schema({
    username:{type:String, unique:true},
    isAdmin:Boolean
})

module.exports = mongoose.model('User', userSchema);