var mongoose = require('mongoose');

var someSchema = new mongoose.Schema({

}, {collection : 'someCollections', discriminatorKey : '_type' });


module.exports = mongoose.model('Something', someSchema);
