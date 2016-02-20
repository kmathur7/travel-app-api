var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flightSchema = new Schema({
	airline_name: String,
	carrier_code: String,
	flight_number: Number,
	departure_city: String,
	arrival_city: String,
	departure_time: Number,
	arrival_time: Number,
	ticket_price: Number

});

module.exports = mongoose.model('Flights',flightSchema);