const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    organizer:String,
    street: String,
    city: String,
    province: String,
    postalCode: String,
    startDate: [Date],
    endDate: [Date],
    Description: String,
    lat: [Number],
    lng: [Number]
});

module.exports = mongoose.model('event', eventSchema, 'events');