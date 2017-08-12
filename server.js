require('dotenv').config();
var express = require('express');
var app = express();
var request = require('request');
var http = require('http');
var https = require('https');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/dist'));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/images/', (req, response) => {
  request(`https://images-api.nasa.gov/search?q=${req.query.planet}&media_type=image`, (err, res, body) => {
    response.send(body)
    console.log(body)
  })
})

app.listen(process.env.PORT || 8080), () => {
    console.log('server running..')
}

module.exports = app;
