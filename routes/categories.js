var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

    console.log('category inside !');
   // res.send('respond with a resource');
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, X-Requested-With');
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT");
    console.log('1');
    var Category = require('../models/categories');

    var catt = new Category({  displayName: 'deneme'});
    catt.save(function(err, saved){
        console.log('2');
        if(err){
            console.log('3');
            console.log('error was here.');
            console.log(err);
        }
        console.log('4');
        console.log('saved');
        console.log(saved);
    })


    Category.find(function (err, cat){
        if (err) return console.error(err);
        res.json(cat);

    })
});

module.exports = router;
