var config = require('config');
var mongoose = require('mongoose');
mongoose.connect(config.get('mongodb-url'));

GLOBAL.ObjectId = require('mongoose').Types.ObjectId;