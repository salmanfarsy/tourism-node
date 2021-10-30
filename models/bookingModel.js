const mongoose = require('mongoose');
const locationModel = require('./locationModel');

//model schema
const BookingSchema = mongoose.Schema({
    username:{type:String},
    bookDate:{type:String},
    duration:Number,
    location:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'Location',
    unique:true
	},
	isDone:{type:Boolean, default:false},

})

module.exports = mongoose.model('Booking', BookingSchema);