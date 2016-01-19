var express = require('express');
var router = express.Router();
var url = require('url');

//------------------------------
// Mongoose schemas
//------------------------------
var Something = require('../../models/Something');

router.post('/', function(req, res, next){

    let something = req.body.id;

    Something.findOne({_id: id})
          .exec((err, result) => {

            let resJson = {
            };

            // ...

            res.send(JSON.stringify(resJson));

          });

});

module.exports = router;
