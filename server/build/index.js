"use strict";
var express = require('express');
var cors = require('cors');
var app = express();
var path = require('path');
var data = require('./routes/log');
app.use(cors());
var port = process.env.PORT || 7000;
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
    //
});
console.log(data());
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '../../client', 'build')));
    app.get('*', function (req, res) {
        res.sendFile(path.resolve(__dirname, '../../client', 'build', 'index.html'));
    });
}
app.listen(port, function () {
    console.log("server is running on port " + port);
});
