const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const regularEventsSchema = new Schema({
    _id: String,
    name: String,
    description: String,
    date: Date
});

module.exports = mongoose.model('regularevent', regularEventsSchema, 'regularevents');


