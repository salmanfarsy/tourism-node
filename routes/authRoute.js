const router = require('express').Router();
const User = require('../models/userModel')

//store user route
router.post('/', async (req, res)=>{
    try {
        const user = await User.create(req.body)
        res.json(user)
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;