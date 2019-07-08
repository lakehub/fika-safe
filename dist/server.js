"use strict";

var _sourceMapSupport = _interopRequireDefault(require("source-map-support"));

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _dbModels = require("./db.models.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import queryString from 'query-String'
// import { MongoClient } from 'mongodb';
// mongoose models
require('babel-polyfill');

var ObjectId = require('mongodb').ObjectID;

_sourceMapSupport["default"].install();

var express = require('express');

var bodyParser = require('body-parser'); // an instance of express


var app = express(); // mounting other middlewares into our server.js
// app.use(express.static('static'));

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
app.use(bodyParser.json()); // OUR SERVER CODE WILL GO HERE
// BASIC CRUD APIS

app.get('/', function (req, res) {
  res.json('this is our first server page');
});
app.post('/api/riders', function (req, res) {
  if (req.body.insurance.issue_date) req.body.insurance.issue_date = new Date(req.body.insurance.issue_date);
  var newRider = new _dbModels.Rider(req.body);
  newRider.save().then(function (rider) {
    console.log({
      message: 'The rider was added successfully'
    });
    res.status(200).json({
      rider: rider
    });
  })["catch"](function (error) {
    res.status(400).send({
      message: "Unable to add the rider: ".concat(error)
    });
  });
});
app.post('/api/saccos', function (req, res) {
  console.log(req.body);
  var newSacco = new _dbModels.Sacco(req.body); // if (!new_sacco._id) new_sacco._id = Schema.Types.ObjectId;

  newSacco.save().then(function (sacco) {
    console.log({
      message: 'The sacco was added successfully'
    });
    res.status(200).json({
      sacco: sacco
    });
  })["catch"](function (err) {
    res.status(400).send({
      message: "Unable to add the sacco: ".concat(err)
    });
  });
});
/* GET ALL RIDERS */

app.get('/api/riders', function (req, res) {
  _dbModels.Rider.find().then(function (rider) {
    if (!rider) res.status(404).json({
      message: 'No avilable Riders in the system'
    });else res.json(rider);
  })["catch"](function (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error: ".concat(error)
    });
  });
});
/* GET SINGLE RIDER BY ID */

app.get('api/riders/:id', function (req, res) {
  var ridersId;

  try {
    ridersId = new ObjectId(req.params.id);
  } catch (error) {
    res.status(400).send({
      message: "Invalid riders ID:".concat(ridersId)
    });
  }

  _dbModels.Rider.findById({
    _id: ridersId
  }).then(function (rider) {
    if (!rider) res.status(404).json({
      message: "No such Rider: ".concat(ridersId)
    });else res.json(rider);
  })["catch"](function (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error: ".concat(error)
    });
  });
});
/* SAVE RIDERS */

app.post('api/riders', function (req, res) {
  var newRider = req.body;

  _dbModels.Rider.create(newRider).then(function (result) {
    _dbModels.Rider.findById({
      _id: result.insertedId
    }).then(function (addedRider) {
      res.json(addedRider);
    });
  })["catch"](function (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error: ".concat(error)
    });
  });
});
/* UPDATE PRODUCT */

app.put('api/riders/:id', function (req, res) {
  var ridersId;

  try {
    ridersId = new ObjectId(req.params.id);
  } catch (error) {
    res.status(400).send({
      message: "Invalid riders ID:".concat(ridersId)
    });
  }

  var newRider = req.body;

  _dbModels.Rider.findByIdAndUpdate({
    _id: ridersId
  }, newRider).find({
    _id: ridersId
  }).then(function (updatedRider) {
    res.json(updatedRider);
  })["catch"](function (err) {
    console.log(err);
    res.status(500).json({
      message: "Unable to update the riders information ".concat(err)
    });
  });
});
/* DELETE PRODUCT */

app["delete"]('api/riders/:id', function (req, res) {
  var ridersId;

  try {
    ridersId = new ObjectId(req.params.id);
  } catch (error) {
    res.status(400).send({
      message: "Invalid riders ID:".concat(ridersId)
    });
  } // THE REQ.BODY IS OPTIONAL INTHE FINDBYIDANREMOVE METHOD


  _dbModels.Rider.findByIdAndRemove({
    _id: ridersId
  }, req.body).then(function (result) {
    res.json(result);
  })["catch"](function (err) {
    console.log({
      message: "Unable to delelete the riders profile ".concat(err)
    });
  });
}); // THIS IS THE SACCOS APIS
// get all saccos

app.get('/api/saccos', function (req, res) {
  _dbModels.Sacco.find().exec().then(function (saccos) {
    res.status(200).json(saccos);
  })["catch"](function (err) {
    res.send("Internal server error".concat(err.stack)).status(400);
  });
});
app.get('/api/saccos/:id', function (req, res) {
  // parameter
  var saccoId;

  try {
    saccoId = req.params.id;
  } catch (error) {
    res.json({
      message: "Invalid sacco id ".concat(error)
    });
  }

  _dbModels.Sacco.findById({
    _id: saccoId
  }).then(function (sacco) {
    res.json(sacco).status(200);
  })["catch"](function (err) {
    res.send("Internal server error".concat(err.stack)).status(400);
  });
}); // post api

app.post('api/saccos', function (req, res) {
  var newSacco = new _dbModels.Sacco(req.body);
  newSacco.save().then(function (addedSacco) {
    // console.log(addedSacco);
    res.status(200).json(addedSacco);
  })["catch"](function (error) {
    res.status(500).json({
      message: "Internal Server Error: ".concat(error)
    });
  });
});
app["delete"]('api/saccos/:id', function (req, res) {
  var saccosId;

  try {
    saccosId = req.params.id;
  } catch (error) {
    res.status(400).send({
      message: "Invalid saccos ID:".concat(saccosId)
    });
  } // THE REQ.BODY IS OPTIONAL INTHE FINDBYIDANREMOVE METHOD


  _dbModels.Rider.findByIdAndRemove({
    _id: saccosId
  }, req.body).then(function (result) {
    res.json(result);
  })["catch"](function (err) {
    console.log({
      message: "Unable to delelete the saccos profile ".concat(err)
    });
  });
});
app.put('api/saccos/:id', function (req, res) {
  var saccosId;

  try {
    saccosId = req.params.id;
  } catch (error) {
    res.status(400).send({
      message: "Invalid saccos ID:".concat(saccosId)
    });
  }

  var newSacco = req.body;

  _dbModels.Sacco.findByIdAndUpdate({
    _id: saccosId
  }, newSacco).find({
    _id: saccosId
  }).then(function (updatedSacco) {
    res.json(updatedSacco);
  })["catch"](function (err) {
    console.log(err);
    res.status(500).json({
      message: "Unable to update the saccos information ".concat(err)
    });
  });
}); // creating a connection to mongoose

_mongoose["default"].connect('mongodb://127.0.0.1:27017/fika-safe', {
  useNewUrlParser: true
}).then(function () {
  app.listen(3000, function () {
    console.log('Listening on port 3000');
  });
})["catch"](function (error) {
  console.log({
    message: "Unable to establish a connection to the server ".concat(error)
  });
});
//# sourceMappingURL=server.js.map