var mongoose = require('mongoose');

var opts = { db: { native_parser: true }};
//var opts = { replset: { strategy: 'ping', rs_name: 'testSet' }}
//var opts = { server: { auto_reconnect: false }, user: 'username', pass: 'mypassword' }

console.log('cat1');
var Schema = mongoose.Schema;

mongoose.createConnection('mongodb://@localhost:27017/fteller-mongoose', opts);
console.log('cat2');
var Category = mongoose.model('categoryModel', new Schema({
    displayName:  String,
    expireDate: {type: Date},
    startDate : {type: Date, default: Date.now}
}));
console.log('cat3');
// make this available to our users in our Node applications
module.exports = Category;


//exports.mongooseProvider = MongooseProvider;
