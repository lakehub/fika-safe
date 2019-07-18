import mongoose, { Schema } from "mongoose";
import yup from "yup";

// UNIQUE PROPERTY VALIDATOR
const mongooseUniqueValidator = require("mongoose-unique-validator");

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
const saccoSchema = yup.object().shape(
  {
    name: yup.string().required(),
    address: yup.string(),
    // required: false
    registration_number: yup
      .string()
      .required()
      .unique(),
    contacts: yup
      .email()
      .string()
      .required(),
    telephone_number: yup
      .string()
      .required()
      .unique(),
    membership: yup.number(),
    date_founded: yup.date().required(),
    about: {
      description: yup .string(),
      website:yup
      .string()
      .test(link => link.indexOf("https://") === 0,
      {message: "Webpage URL must start with https://"})
    },
    status: yup.string(),
    created: yup
    .date()
    .default(() => (new Date()),
  });


// RIDER SCHEMA
const riderSchema =  yup.object().shape(
  {

      first_name: yup
      .string()
      .required(),
      sur_name: yup
      .string()
      .required(),
      last_name: yup
      .string()
      .required(),
    telephone_number: yup
    .number()
    .required(),
    address: yup
    .string()
    .required(),
    passport_photo:yup
    .buffer(),
    license_number:yup
      .string()
      .required(),
    insurance: {
      number: yup
        .string()
        // required: true,
        .unique(),
      issue_date: yup
        .date()
        .required(),
        // default: new Date(),
      exp_date: yup
        .date()
        .required()
        // default: new Date(),
    },
    // revisit
    passport_ID: yup
    .string()
    .required()
    .unique(),
    number_plate:yup
    .string()
    .required()
    .unique()
    .test(text => text.indexOf("K") === 0,
    {message: "Invalid number plate"}),

    created: yup
    .date()
    .default(() => (new Date()),
    // react states
    isActive:yup
      .boolean()
      .default('true'),
    // TODO challenge on how to implement ratings on the riders
    ratings: yup
    .number(),
    // THIS IS WHERE WE REFERENCE THE RIDER TO THEIR RESPECTIVE SACCOS
    sacco: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sacco"
    }
  },
  { strict: false }
);
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
