var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var mongoose = require('mongoose');



//モデルの宣言
var User = require('../models/user');


/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("profile.js");
    res.render('profile', { Hello: 'Express' });
  
});