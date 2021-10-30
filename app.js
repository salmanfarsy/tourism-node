//modules
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoute = require('./routes/authRoute');
const locationRoute = require('./routes/locationRoute');
const bookingRoute = require('./routes/bookingRoute');
const dotenv = require('dotenv');
dotenv.config();
//mongoose config
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('Connected to the database'))
.catch(err=> console.log(err))
const cors = require('cors');

//app config
app.use(express.json())
app.use(cors());

//routes
app.get('/api', (req, res)=>{
    res.json({data :'hello world'})
})
app.use('/api/auth', authRoute);
app.use('/api/location', locationRoute);
app.use('/api/bookings', bookingRoute);
//port
app.listen(process.env.PORT , ()=>{
    console.log('server running')
})