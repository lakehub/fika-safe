"use strict";

var _sourceMapSupport = _interopRequireDefault(require("source-map-support"));

var _mongodb = require("mongodb");

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _dbModels = require("./db.models.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require('babel-polyfill'); // UNIQUE VALIDATOR


var mongooseUniqueValidator = require('mongoose-unique-validator');

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
app.use(bodyParser.json()); // mongoose models

// OUR SERVER CODE WILL GO HERE
// BASIC CRUD APIS
app.get('/', function (req, res) {
  res.json("this is our first server page");
});
app.post("/api/riders", function (req, res) {
  var new_rider = new _dbModels.Rider(req.body);
  new_rider.save().then(function (rider) {
    console.log({
      message: "The rider was added successfully"
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
app.post("/api/saccos", function (req, res) {
  console.log(req.body);
  var new_sacco = new _dbModels.Sacco(req.body); // if (!new_sacco._id) new_sacco._id = Schema.Types.ObjectId;

  new_sacco.save().then(function (sacco) {
    console.log({
      message: "The sacco was added successfully"
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
      message: "No avilable Riders in the system"
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
  var riders_id;

  try {
    riders_id = new ObjectId(req.params.id);
  } catch (error) {
    res.status(400).send({
      message: "Invalid riders ID:".concat(riders_id)
    });
  }

  _dbModels.Rider.findById({
    _id: riders_id
  }).then(function (rider) {
    if (!rider) res.status(404).json({
      message: "No such Rider: ".concat(riders_id)
    });else res.json(rider);
  })["catch"](function (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error: ".concat(error)
    });
  });

  0;
});
/* SAVE RIDERS */

app.post('api/riders', function (req, res) {
  var new_rider = req.body;

  _dbModels.Rider.create(new_rider).then(function (result) {
    _dbModels.Rider.findById({
      _id: result.insertedId
    }).then(function (added_rider) {
      res.json(added_rider);
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
  var riders_id;

  try {
    riders_id = new ObjectId(req.params.id);
  } catch (error) {
    res.status(400).send({
      message: "Invalid riders ID:".concat(riders_id)
    });
  }

  var new_rider = req.body;

  _dbModels.Rider.findByIdAndUpdate({
    _id: riders_id
  }, new_rider).find({
    _id: riders_id
  }).then(function (updated_rider) {
    res.json(updated_rider);
  })["catch"](function (err) {
    console.log(err);
    res.status(500).json({
      message: "Unable to update the riders information ".concat(err)
    });
  });
});
/* DELETE PRODUCT */

app["delete"]('api/riders/:id', function (req, res) {
  var riders_id;

  try {
    riders_id = new ObjectId(req.params.id);
  } catch (error) {
    res.status(400).send({
      message: "Invalid riders ID:".concat(riders_id)
    });
  } // THE REQ.BODY IS OPTIONAL INTHE FINDBYIDANREMOVE METHOD


  _dbModels.Rider.findByIdAndRemove({
    _id: riders_id
  }, req.body).then(function (result) {
    res.json(result);
  })["catch"](function (err) {
    console.log({
      message: "Unable to delelete the riders profile ".concat(err)
    });
  });
}); //creating a connection to mongoose

_mongoose["default"].connect('mongodb://127.0.0.1:27017/fika-safe', {
  useNewUrlParser: true
}).then(
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          app.listen(3000, function () {
            console.log("Listening on port 3000");
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
//# sourceMappingURL=server.js.map