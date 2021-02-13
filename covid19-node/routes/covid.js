var unirest = require("unirest");
var express = require('express');
var router = express.Router();
var data;
var request = unirest("GET", "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats");

router.post('/', function(req, res, next)
{

request.query({
	"country": req.body.Country
});

request.headers({
	"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
	"x-rapidapi-key": "cb63e9f6ffmsh030054e2d880f70p1a5fe2jsnc47cc39f1447"
});


request.end(function (res) {
	if (res.error) throw new Error(res.error);
    
    data=res.body;
    console.log(data);
});


res.json(data);	

});

module.exports = router;