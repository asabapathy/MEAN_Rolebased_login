const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const specialEventsSchema = new Schema({
    _id: String,
    name: String,
    description: String,
    date: Date
});

module.exports = mongoose.model('specialevent', specialEventsSchema, 'specialevents');


