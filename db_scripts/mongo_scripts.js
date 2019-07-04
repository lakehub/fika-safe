// import { Sacco, Rider } from '../server/db.models';// db models
// this a mongo api shell script
import { Shema } from 'mongoose';
import mongoose from 'mongoose';

// creates a new instance of connenction to the refereced database
//establishes a connection to the database
const saccoSchema = new Schema({
    _id: false,//Schema.Types.ObjectId,
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
    _id: Schema.Types.ObjectId,// hashed
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
            required: true,
            unique: true
        },
        issue_date: {
            type: Date,
            required: true,
            default: Date.now
        },
        exp_date: {
            type: Date,
            required: true,
            default: Date.now
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
        type: Schema.Types.ObjectId,
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

const db = new Mongo().getDB('fika-safe');
// 
db.issues.remove({});

// ++MOCKDATA++
let sacco1 = new Sacco({
    "name": "Moms Sacco",
    "address": "Lakehub",
    "registration_number": "ADJSKHF3W4332K",
    "contacts": {
        "email": "cyruskiprop254@gmail.com",
        "telephone_number": "0726158348",
    },
    "about": {
        "description": "thisis the first sacco to be inserted into the database",
        "website": "https://www.google.com"
    }

})
let rider1 = new Rider({
    "name": {
        "first_name": 'Cyrus',
        "sur_name": 'Arap',
        "last_name: 'Kiprop'
    },
    "telephone_number": 726158347,
    "address": 'Kisumu',
    "license_number": 'AKOLDJS8989',
    "insurance": {
        "number": "234ADSLSDADL",
        "issue_date": "Date.now",
        "exp_date": "Date.now"
    },
    "passport_ID": '31607309',
    "number_plate": 'KAT 4TH',
    "created": "Date.now",
    "isActive": "true",
    "ratings": "5",
    "sacco": "sacco1"
})