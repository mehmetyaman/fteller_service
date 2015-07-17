var mongoose = require('mongoose');

var opts = { db: { native_parser: true }};
//var opts = { replset: { strategy: 'ping', rs_name: 'testSet' }}
//var opts = { server: { auto_reconnect: false }, user: 'username', pass: 'mypassword' }

var Schema = mongoose.Schema;

console.log('pred1');
mongoose.createConnection('mongodb://@localhost:27017/fteller-mongoose', opts);

console.log('pred2');
var Prediction = mongoose.model('predictionModel', new Schema({
    owner:  String,
    predDate: {type: Date},
    predAmount : {type: Number},
    date: { type: Date, default: Date.now },
    meta: {
        votes: Number,
        favs:  Number
    }
}));

console.log('pred3');
// make this available to our users in our Node applications
module.exports = Prediction;


//exports.mongooseProvider = MongooseProvider;
