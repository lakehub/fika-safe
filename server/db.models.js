import mongoose, { Schema } from 'mongoose';

const bcrypt = require('bcrypt');



// UNIQUE PROPERTY VALIDATOR
const mongooseUniqueValidator = require('mongoose-unique-validator');

// SUPER ADMIN SCHEMA
const UserSchema = new Schema({
  username: String,
  password: String
});

// pre save functiion
UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

// compare passwords
UserSchema.methods.comparePassword = function (plaintext, callback) {
  return callback(null, bcrypt.compareSync(plaintext, this.password));
};

UserSchema.methods.comparePassword = (plaintext, callback) => { };





// SCHEMA BLUEPRINTS
const saccoSchema = new Schema({

  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    // required: false
  },
  registration_number: {
    type: String,
    required: true,
    unique: true,
  },
  contacts: {
    email: {
      type: String,
      unique: true,
      required: true,

    },
    telephone_number: {
      type: String,
      required: true,
      unique: true,
    },
  },
  membership: Number,
  date_founded: {
    type: Date,
    required: true
  },

  about: {
    description: String,
    website: {

      type: String,
      validate: {
        validator: link => link.indexOf('https://') === 0,
        message: 'Webpage URL must start with https://',
      },
    },

  },
  created: {
    type: Date,
    default: new Date(),
  },
  status: 'string',
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true }
  // ....

}, { strict: false });

// RIDER SCHEMA
const riderSchema = new Schema({
  name: {
    first_name: {
      type: String,
      required: true,
    },
    sur_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
  },
  telephone_number: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  passport_photo: {
    type: Buffer,
    required: false,
  },
  license_number: {
    type: String,
    required: true,
    unique: true,
  },
  insurance: {
    number: {
      type: String,
      // required: true,
      unique: true,
    },
    issue_date: {
      type: Date,
      required: true,
      // default: new Date(),
    },
    exp_date: {
      type: Date,
      required: true,
      // default: new Date(),
    },
  },
  // revisit
  passport_ID: {
    type: String,
    required: true,
    unique: true,

  },
  number_plate: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: text => text.indexOf('K') === 0,
      message: 'Invalid number plate',
    },

  },
  created: {
    type: Date,
    default: new Date(),
  },
  // react states
  isActive: {
    type: Boolean,
    default: true,
  },
  // TODO challenge on how to implement ratings on the riders
  ratings: [
    {
      numberOfStars: Number,
    },
  ],
  // THIS IS WHERE WE REFERENCE THE RIDER TO THEIR RESPECTIVE SACCOS
  sacco: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sacco',
  },

}, { strict: false });
// USING PLUGINS T
saccoSchema.plugin(mongooseUniqueValidator);
riderSchema.plugin(mongooseUniqueValidator);

// CREATING AND SAVING MONGOOSE MODEL
// THIS CAN ALSO BE EXPORTED TO ANOTHER MODULARISED FILE
const Sacco = mongoose.model('Sacco', saccoSchema);
const Rider = mongoose.model('Rider', riderSchema);
const UserModel = mongoose.model("user", UserSchema);

// ++INSERTING SOME DATA INTO THE DATABASE++


module.exports = {
  Sacco,
  Rider,
  UserModel
};
