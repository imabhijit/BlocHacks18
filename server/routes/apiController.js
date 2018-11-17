const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Organization = require('../models/organization');
const jwt = require('jsonwebtoken');
const db = "mongodb://blochacks:refugee2018@ds151207.mlab.com:51207/donate-app";

mongoose.connect(db, function(err){
    if(err){
        console.error('Error! ' + err);
    } else {
        console.log('Connected to mongodb');
    }
});

router.get('/organizations', function(req, res){
     Organization.find({}, function(err, orgs){
        if(err){
            console.log(err);
        } else{
            console.log('retrieved list of names', orgs.length, orgs[0].name);
            res.status(200).send(JSON.stringify(orgs));
        }
    });
});

router.post('/login', (req, res) => {
    let requestData = req.body;
    organization.findOne({email: requestData.email}, (err, organization) => {
        if (err) {
            console.log(err);
        } else {
            if (!organization) {
                res.status(401).send('Invalid Email');
            } else
            if ( organization.password !== requestData.password) {
                res.status(401).send('Invalid Password');
            } else {
                let payload = {subject: organization._id};
                let token = jwt.sign(payload, 'secretKey');
                res.status(200).send({token});
            }
        }
    });
});

router.post('/add', (req, res) => {
    console.log(req.body);
    let requestData = req.body;
    let organization = new Organization(requestData);
    organization.save((err, savedOrg) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send('made new organization: '+JSON.stringify(savedOrg));
        }
    })
});

module.exports = router;