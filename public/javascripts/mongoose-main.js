var mongoose = require('mongoose');

var opts = { db: { native_parser: true }};
//var opts = { replset: { strategy: 'ping', rs_name: 'testSet' }}
//var opts = { server: { auto_reconnect: false }, user: 'username', pass: 'mypassword' }

var Schema = mongoose.Schema;

require('./models/predictions');

require('./models/categories');

