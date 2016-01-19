var csv = require('csv');
var parse = require('csv-parse');
var fs = require('fs');
var async = require('async');
var lineReader = require('line-reader');

function parseCsvFile(file, callback){
    var parser = csv.parse({delimiter: ',', columns:true, trim:true}, function(err, data){
        //TODO use logging system
        //log.info('parsing file %s, %s rows', file, data.length);
        callback(err, data);
    });
    fs.createReadStream(file).pipe(parser);
}

function parseCsvFileStream(file, rowCallback, endCallback){

    var skipFirstLine = true;

    lineReader.eachLine(file, function(line, last, cb) {

        if(skipFirstLine) {
            skipFirstLine = false;
            cb();
        } else {

            rowCallback(line.split(','), cb);

            if(last) {
                endCallback(null);
            }

        }

    });
}


module.exports = {
    parseCsvFile: parseCsvFile,
    parseCsvFileStream: parseCsvFileStream
};