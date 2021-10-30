const router = require('express').Router();
const { json } = require('express');
const Booking= require('../models/bookingModel')
const Location= require('../models/locationModel')

//Add new Booking
router.post('/', async (req, res)=>{
    try {
      const newBooking =  await Booking.create(req.body)
     res.json(newBooking);
        
    } catch (error) {
        console.log(error)
        res.json(error)
    }
})
//get all booking
router.get('/', async (req, res)=>{
    try {
     const allBookings = await Booking.find().populate('location')
     res.json(allBookings);
    } catch (error) {
        console.log(error)
    }
})
//get user Bookings
router.get('/:user', async (req, res)=>{
    try {
        const bookings = await Booking.find({username:req.params.user}).populate('location')
        res.json(bookings);
    } catch (error) {
        console.log(error)
    }
 
})
//delete Booking 
router.delete('/:id', async (req, res)=>{
    const id = req.params.id;
    try {
        await Booking.findByIdAndRemove(id)
        res.json('your booking deleted');
    } catch (error) {
        console.log(error)
    }
})
//update Approval route
router.put('/:id', async (req, res)=>{
    try {
        await Booking.findByIdAndUpdate(req.params.id, req.body)
        res.json('done you are approved')
    } catch (error) {
        console.log(error)
    }
})
module.exports = router;