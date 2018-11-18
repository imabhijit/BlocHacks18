const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    organizer:String,
    location: String,
    Time: String,
    Description: String
});

module.exports = mongoose.model('Event', eventSchema, 'Events');