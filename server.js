const express = require('express');
const bodyParsor = require('body-parser');
let app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://**:**@ds255451.mlab.com:55451/testauto');

const Bear = require('./app/models/bear');

app.use(bodyParsor.urlencoded({ extended:true}));
app.use(bodyParsor.json());

let port = process.env.PORT || 8081;

let router = express.Router();

router.use(function (req,res,next) {
   console.log("Something is happening");
   next(); 
});

router.get('/',function(req,res) {
   res.json({message: 'horray! wlecome to our api!'}); 
});

app.use('/api',router);

app.listen(port);
console.log('Magic happens on port'+port);