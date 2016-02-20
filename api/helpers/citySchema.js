var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var citySchema = new Schema({
	city_name: String,
	city_code: String

});

module.exports = mongoose.model('Cities', citySchema);