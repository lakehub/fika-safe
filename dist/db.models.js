"use strict";

var _mongoose = _interopRequireWildcard(require("mongoose"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

// UNIQUE PROPERTY VALIDATOR
var mongooseUniqueValidator = require('mongoose-unique-validator'); // SCHEMA BLUEPRINTS


var saccoSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String // required: false

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
    }
  } // ....

}); // RIDER SCHEMA

var riderSchema = new _mongoose.Schema({
  name: {
    first_name: {
      type: String,
      required: true
    },
    sur_name: {
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
    required: false
  },
  license_number: {
    type: String,
    required: true,
    unique: true
  },
  insurance: {
    number: {
      type: String,
      // required: true,
      unique: true
    },
    issue_date: {
      type: Date,
      // required: false,
      "default": Date.now
    },
    exp_date: {
      type: Date,
      required: false,
      "default": Date.now
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

var Rider = _mongoose["default"].model('Rider', riderSchema); // ++INSERTING SOME DATA INTO THE DATABASE++


module.exports = {
  Sacco: Sacco,
  Rider: Rider
};
//# sourceMappingURL=db.models.js.map