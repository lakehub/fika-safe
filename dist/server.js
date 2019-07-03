"use strict";

var _sourceMapSupport = _interopRequireDefault(require("source-map-support"));

var _mongodb = require("mongodb");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import queryString from 'query-string'
var ObjectId = require('mongodb').ObjectID;

_sourceMapSupport["default"].install();

var express = require('express');

var bodyParser = require('body-parser'); // an instance of express


var app = express(); // mounting other middlewares into our server.js

app.use(express["static"]('static'));

var qpm = require('query-params-mongo');

var mongodb = require('mongodb');

var processQuery = qpm({
  autoDetect: [{
    fieldPattern: /_id$/,
    dataType: 'objectId'
  }],
  converters: {
    objectId: mongodb.ObjectID
  }
});
app.use(bodyParser.json()); // OUR SERVER CODE WILL GO HEREa

app.get('/', function (req, res) {
  res.json("this is our first server page");
});
var db = null; // Initialize connection once
// MongoClient.connect("mongodb://localhost:27017/test", (err, client) => {
//     if (err) throw err;
//     db = client.db('test');
//     // Start the application after the database connection is ready
//     app.listen(3000, () => {
//         console.log("Listening on port 3001")
//     });
// });

app.listen(3000, function () {
  console.log("Listening on port 3001");
});
//# sourceMappingURL=server.js.map