var express = require('express');
var router = express.Router();

var app = express();
var Prediction = require('../models/predictions');

/* GET users listing. */
router.get('/', function (req, res, next) {

    /*
    var pred = new Prediction({
        owner: 'mehmet',
        predAmount: 90.8
    });

    pred.save(function(err) {
        if (err) {
            console.log(err);
            throw err;
        }
    });
    */

    console.log('prediction savnnned successfully!');
   // res.send('respond with a resource');
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, X-Requested-With');
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT");

    Prediction.find(function (err, preds){
        if (err) return console.error(err);
        res.json(preds);

    })
});

router.route('/remove').post(function (req, res) {
    employeeProvider.remove( req.param('empId') , function (err, emps) {

        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, X-Requested-With');
        res.header("Access-Control-Allow-Methods", "GET,POST,PUT");

        if (err) {
            console.log(err);
            return res.send(err);
        }


        res.json(emps);
    });
});

module.exports = router;
