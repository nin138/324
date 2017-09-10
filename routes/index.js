var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var mongoose = require('mongoose');



//モデルの宣言
var User = require('../models/user');
var Rank = require('../models/rank');
var Lang = require('../models/lang');


/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("index.js");
    res.render('index', { Hello: 'Express' });
  
});


router.get('/profile', function(req, res, next) {
    console.log("profile222.js");
    res.render('index', { Hello: 'Express' });

    console.log("catch the get request");
    res.setHeader('Content-Type', 'text/plain');

    console.log(req.body.username);
    console.log(req.body.userid);
    console.log(req.body.place);
    console.log(req.body.word);

    var username = req.body.username;
    var userid = req.body.userid;
    var password = req.body.place
    var hash = req.body.word;

    User.find({ "userid" : userid }, function(err, result){
        if (err)console.log("err");

        if(result.length == 0){
            var user = new User();
            user.username = username;
            user.userid = userid;
            user.password = place;
            user.hash = word;

            console.log("regist to DB");
            


            var profile = {
              name: "徹",
              place: 'Tokyo',
              word: "テスト〜",
              lang: { 
                javascript: '3',
                java: '5',
                python: '2'
              }

            }
                

            var profileJSON = JSON.stringify(profile);

            res.send(profileJSON);
            res.redirect('/index');    
        }else{
            console.log("Already registrated");
            res.render('registration', { Hello: 'Already registrated' });
            
        }
    });


    
  
});


router.get('/ichiran', function(req, res, next) {
    console.log("ichiran.js");
    res.render('index', { Hello: 'Express' });

    console.log("catch the get request");
    res.setHeader('Content-Type', 'text/plain');

    console.log(req.body.username);
    console.log(req.body.userid);
    console.log(req.body.place);
    console.log(req.body.word);

    var username = req.body.username;
    var userid = req.body.userid;
    var password = req.body.place;
    var hash = req.body.word;

    User.find({ "userid" : userid }, function(err, result){
        if (err)console.log("err");

        if(result.length == 0){
            var user = new User();
            user.username = username;
            user.userid = userid;
            user.password = place;
            user.hash = word;

            console.log("regist to DB");


            var engineer = [
                { name: 'Dave', place: 'Atlanta', lang: 'java', rank: '3', word: "テスト" },
                { name: "徹", place: 'Tokyo', lang: 'java', rank: '5', word: "テスト2"  },
                { name: '金子', place: 'Osaka', lang: 'java', rank: '2', word: "テスト1" }
            ];

            var engineerJSON = JSON.stringify(engineer);

            res.send(engineerJSON);
            res.render('index', { Hello: 'Express' });
           

            
            res.redirect('/index');    
        }else{
            console.log("Already registrated");
            res.render('registration', { Hello: 'Already registrated' });
            
        }
    });


    
  
});
module.exports = router;
