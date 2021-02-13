  

 const express = require('express'),
       router = express.Router();
       MongoClient = require('mongodb').MongoClient
       config = require('../DB');


router.get('/covid_TN', function(req, res, next)
{

    MongoClient.connect(config.DB, {useNewUrlParser:true ,useUnifiedTopology: true}, function(err, client) {
        if (err) throw err;
        var db = client.db('covid');
         db.collection("covid_coll").find({'statecode':'TN'}).toArray(function(err, result) {
          if (err) throw err;
            res.json(result);
            client.close(); 
          });
        }); 
  
   
});


router.get('/district', function(req, res, next)
{

    MongoClient.connect(config.DB, {useNewUrlParser:true ,useUnifiedTopology: true}, function(err, client) {
        if (err) throw err;
        var db = client.db('covid');
         db.collection("covid_district_map").find({}).toArray(function(err, result) {
          if (err) throw err;
            res.json(result);
            client.close(); 
          });
        }); 
 
   
});



router.get('/dash', function(req, res, next)
{

    MongoClient.connect(config.DB, {useNewUrlParser:true ,useUnifiedTopology: true}, function(err, client) {
        if (err) throw err;
        var db = client.db('covid');
         db.collection("covid_dash").find({}).toArray(function(err, result) {
          if (err) throw err;
            res.json(result);
            client.close(); 
          });
        }); 
 
   
});


router.get('/patient', function(req, res, next)
{

    MongoClient.connect(config.DB, {useNewUrlParser:true ,useUnifiedTopology: true}, function(err, client) {
        if (err) throw err;
        var db = client.db('covid');
         db.collection("covid_coll").find({'statecode':'TN'}).toArray(function(err, result) {
          if (err) throw err;
            res.json(result);
            client.close(); 
          });
        }); 
 
   
});



module.exports = router;