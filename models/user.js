var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    username : { type: String, require: true }, 
    userid : {type: String, require: true ,unique:true},
    place : {type: String, require: true},
    word : {type: String, require: true}
});

module.exports = mongoose.model('user', User);