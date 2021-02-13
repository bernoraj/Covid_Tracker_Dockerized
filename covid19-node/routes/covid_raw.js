const express = require('express'),
      router = express.Router(),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      config = require('../DB');

      
var data;
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useUnifiedTopology: true,useNewUrlParser: true }).then(
    () => {},
    err => { console.log('Can not connect to the database'+ err)}
  );

router.get('/', function(req, res, next)
{
    var connection=mongoose.connection;  
    connection.on('error', console.error.bind(console, 'connection error:'));
    connection.once('open', function () {

      connection.db.collection("covid_coll", function(err, collection){
        collection.find({}).limit(10).toArray(function(err, data){
            if (err) throw err;
            res.json(data);
            connection.close(); 
            //console.log(data); // it will print your collection data
        })
    }); 

    });

    mongoose.disconnect();
});

module.exports = router;