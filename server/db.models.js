import mongoose from "mongoose";
import { Schema } from "mongoose";

// UNIQUE PROPERTY VALIDATOR
const mongooseUniqueValidator = require('mongoose-unique-validator');

// SCHEMA BLUEPRINTS
const saccoSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
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
    }, contacts: {
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
                validator: (link) => {
                    return link.indexOf('https://') === 0;
                },
                message: 'Webpage URL must start with https://'
            }
        }

    }
    // ....

});

// RIDER SCHEMA
const riderSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,// hashed
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
            required: true,
        },
        exp_date: {
            type: Date,
            required: true,
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
            validator: (text) => {
                return text.indexOf('K') === 0;
            },
            message: 'Invalid number plate'
        }

    },
    created: {
        type: Date,
        default: Date.now
    },
    // react states
    isActive: {
        type: Boolean,
        default: true
    },
    // TODO challenge on how to implement ratings on the riders
    ratings: [
        {
            numberOfStars: Number,
        }
    ],
    // THIS IS WHERE WE REFERENCE THE RIDER TO THEIR RESPECTIVE SACCOS
    sacco: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sacco'
    },

})
// USING PLUGINS T
saccoSchema.plugin(mongooseUniqueValidator);
riderSchema.plugin(mongooseUniqueValidator);

// CREATING AND SAVING MONGOOSE MODEL 
// THIS CAN ALSO BE EXPORTED TO ANOTHER MODULARISED FILE
const Sacco = mongoose.model('Sacco', saccoSchema);
const Rider = mongoose.model('Rider', riderSchema);

module.exports = {
    Sacco,
    Rider
}