var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var organizationSchema = new Schema({
    type: String,
    email: String,
    password: String,
    name: String,
    location: String,
    tel: String,
    website: String
});

module.exports = mongoose.model('organization', organizationSchema, 'organization');