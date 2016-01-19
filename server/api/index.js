var jsonParser = require('body-parser').json({extended: true,limit: '5mb'});

function registerApi(app){

    app.use(jsonParser);
    app.use('/something/', require('./something'));


}


module.exports = registerApi;