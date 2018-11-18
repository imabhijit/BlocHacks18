const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const organizationSchema = new Schema({
    type: String,
    email: String,
    password: String,
    name: String,
    location: String,
    tel: String,
    website: String,
    hours: [String]
});

module.exports = mongoose.model('organization', organizationSchema, 'organizations');