const router = require('express').Router();
const Location= require('../models/locationModel')

//Add new Location
router.post('/', async (req, res)=>{
    try {
    
        const location = await Location.create(req.body)
        res.json(location)
    } catch (error) {
        console.log(error)
    }
})
//get all Location
router.get('/', async (req, res)=>{
    try {
        const allLocations = await Location.find();
        res.json(allLocations);
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;