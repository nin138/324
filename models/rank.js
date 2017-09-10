var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Rank = new Schema({
    userid : {type: String, require: true ,unique:true},
    langid : {type: String, require: true},
    rank : {type: String, require: true}
});

module.exports = mongoose.model('rank', Rank);