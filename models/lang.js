var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Lang = new Schema({
    langid : {type: String, require: true ,unique:true},
    lang : {type: String, require: true}
});

module.exports = mongoose.model('lang', Lang);