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

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')
    }
    req._id = payload.subject
    next()
  }

router.get('/organizations', verifyToken, function(req, res){
     Organization.find({}, function(err, orgs){
        if(err){
            console.log(err);
        } else{
            console.log('retrieved list of names', orgs.length, orgs[0].name);
            res.status(200).send(orgs);
        }
    });
});

router.post('/login', (req, res) => {
    let requestData = req.body;
    Organization.findOne({email: requestData.email}, (err, organization) => {
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

//Events:

router.post('/create', (req,res) => {
    let reqEvent = req.body;
    let event  = new Event(reqEvent);
    event.save((err,savedEvent)=> {
        if(err){
            console.log(err);
        }
        else{
            res.status(200).send(savedEvent);
        }
    })
});

router.get('/', function(req, res){
    Event.find({}, function(err, eve){
        if(err){
            console.log(err);
        } else{
            console.log('retrieved list of names', eve.length, eve[0].name);
            res.status(200).send(eve);
        }
    });
});

router.get('/events/:organizer', function(req, res){
    Event.find((req.params), function(err, eve){
        if(err){
            console.log(err);
        } else{
            console.log('retrieved list of names', eve.length, eve[0].name);
            res.status(200).send(eve);
        }
    });
});


module.exports = router;
