const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Organization = require('../models/organization');
const jwt = require('jsonwebtoken');
const db = "mongodb://blochacks:refugee2018@ds151207.mlab.com:51207/donate-app";
const Event = require ('../models/Event');

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
    //let organization = new Organization(requestData);
    Organization.findOne({email: requestData.email}, (err, loggedOrg) => {
        if (err) {
            console.log(err);
        } else {
            if (!loggedOrg) {
                res.status(401).send('Invalid Email');
            } else
            if ( loggedOrg.password !== requestData.password) {
                res.status(401).send('Invalid Password');
            } else {
                //res.status(200).send('made new organization: '+JSON.stringify(loggedOrg));
                let payload = {subject: loggedOrg._id};
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

//Events:

router.post('/org', (req,res) => {
    let reqEvent = req.body;
    let event  = new Event(reqEvent);
    event.save ((err,savedOrg)=> {
        if(err){
            console.log(err);
        }
        else{
            res.status(200).send ('made new event'+JSON.stringify((savedOrg)))
        }
    })
})
router.get('/home',(req,res)=> {
    let event = {
        organizer: "Hampic",
        location: "Baboyan",
        Time: "ferdo",
        Description: "VICE"
    }
    res.json(event);
})

module.exports = router;