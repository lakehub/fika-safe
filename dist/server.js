"use strict";

var _sourceMapSupport = _interopRequireDefault(require("source-map-support"));

var _mongodb = require("mongodb");

var _mongoose = _interopRequireWildcard(require("mongoose"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import queryString from 'query-String'
// UNIQUE VALIDATOR
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
app.use(bodyParser.json()); // OUR SERVER CODE WILL GO HEREa

app.get('/', function (req, res) {
  res.json("this is our first server page");
}); // SCHEMA BLUEPRINTS

var saccoSchema = new _mongoose.Schema({
  _id: _mongoose["default"].Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: false
  },
  registration_number: {
    type: String,
    required: true,
    unique: true
  },
  contacts: {
    email: {
      type: String,
      unique: true,
      required: true
    },
    telephone_number: {
      type: String,
      required: true,
      unique: true
    }
  },
  about: {
    description: String,
    website: {
      type: String,
      validate: {
        validator: function validator(link) {
          return link.indexOf('https://') === 0;
        },
        message: 'Webpage URL must start with https://'
      }
    } // ....

  }
}); // rider scheam

var riderSchema = new _mongoose.Schema({
  _id: _mongoose["default"].Schema.Types.ObjectId,
  // hashed
  name: {
    first_name: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    }
  },
  telephone_number: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  passport_photo: {
    type: Buffer,
    required: true
  },
  license_number: {
    type: String,
    required: true,
    unique: true
  },
  insurance: {
    Number: {
      type: String,
      required: true,
      unique: true
    },
    issue_date: {
      type: Date,
      required: true
    },
    exp_date: {
      type: Date,
      required: true
    }
  },
  // revisit
  passport_ID: {
    type: String,
    required: true,
    unique: true
  },
  number_plate: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function validator(text) {
        return text.indexOf('K') === 0;
      },
      message: 'Invalid number plate'
    }
  },
  created: {
    type: Date,
    "default": Date.now
  },
  // react states
  isActive: {
    type: Boolean,
    "default": true
  },
  // TODO challenge on how to implement ratings on the riders
  ratings: [{
    numberOfStars: Number
  }],
  // THIS IS WHERE WE REFERENCE THE RIDER TO THEIR RESPECTIVE SACCOS
  sacco: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Sacco'
  }
}); // USING PLUGINS T

saccoSchema.plugin(mongooseUniqueValidator);
riderSchema.plugin(mongooseUniqueValidator); // CREATING AND SAVING MONGOOSE MODEL 
// THIS CAN ALSO BE EXPORTED TO ANOTHER MODULARISED FILE

var Sacco = _mongoose["default"].model('Sacco', saccoSchema);

var Rider = _mongoose["default"].model('Rider', riderSchema);

var db = null; // Initialize connection once
// MongoClient.connect("mongodb://localhost:27017/test", (err, client) => {
//     if (err) throw err;
//     db = client.db('test');
//     // Start the application after the database connection is ready
//     app.listen(3000, () => {
//         console.log("Listening on port 3001")
//     });
// });

_mongoose["default"].connect('mongodb://localhost/fika-safe').then(function (client) {
  db = client.db('fika-safe'); // START THE SERVER

  app.listen(3000, function () {
    console.log("Listening on port 3001");
  });
})["catch"](function (err) {
  console.log(err.stack);
});
//# sourceMappingURL=server.js.map