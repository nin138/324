var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    langid : {type: String, require: true ,unique:true},
    lang : {type: String, require: true}
});

module.exports = mongoose.model('user', User);