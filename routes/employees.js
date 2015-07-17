var express = require('express');

var router = express.Router();
var app = express();
var employeeProvider = new EmployeeProvider('localhost', 27017);

router.route('/').get(function (req, res) {
    employeeProvider.findAll(function (err, emps) {
        if (err) {
            console.log('hata var');
            return res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, X-Requested-With');
        res.header("Access-Control-Allow-Methods", "GET,POST,PUT");

        res.json(emps);
    });
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


//save new employee
router.route('/add').post(function (req, res) {
    employeeProvider.save(
        {
            title: req.param('title'),
            name: req.param('name')
        }, function (error, emps) {
            employeeProvider.findAll(function (err, emps) {
                if (err) {
                    console.log('errors occured');
                    return res.send(err);
                }

                res.header("Access-Control-Allow-Origin", "*");
                res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, X-Requested-With');
                res.header("Access-Control-Allow-Methods", "GET,POST,PUT");

                res.json(emps);
            });
        });
});


module.exports = router;
