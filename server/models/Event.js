const mongoose = require('mongoose');
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    organizer:String,
    street: String,
    city: String,
    province: String,
    postalCode: String,
    startTime: String,
    endTime: String,
    Description: String
});

module.exports = mongoose.model('event', eventSchema, 'events');