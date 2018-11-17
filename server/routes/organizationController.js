var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var organization = require('../models/organization');
var jwt = require('jsonwebtoken');
var db = "mongodb://blochacks:refugee2018@ds151207.mlab.com:51207/donate-app";

mongoose.connect(db, function(err){
    if(err){
        console.error('Error! ' + err)
    } else {
        console.log('Connected to mongodb')
    }
});

router.post();

module.exports = router;