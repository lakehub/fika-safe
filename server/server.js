import sourceMapSupport from 'source-map-support'
// import queryString from 'query-String'
import { MongoClient } from 'mongodb';
import mongoose from "mongoose";
import { Schema } from "mongoose";



// UNIQUE VALIDATOR
const mongooseUniqueValidator = require('mongoose-unique-validator');


const ObjectId = require('mongodb').ObjectID;

sourceMapSupport.install()

const express = require('express');
const bodyParser = require('body-parser');

// an instance of express
const app = express();

// mounting other middlewares into our server.js
app.use(express.static('static'));


var qpm = require('query-params-mongo');
var mongodb = require('mongodb');

var processQuery = qpm({
    autoDetect: [{ fieldPattern: /_id$/, dataType: 'objectId' }],
    converters: { objectId: mongodb.ObjectID }
});




app.use(bodyParser.json());

// mongoose models
import { Sacco, Rider } from 'db.models.js'
// OUR SERVER CODE WILL GO HEREa

app.get('/', (req, res) => {
    res.json(`this is our first server page`);
})


let db = null;

mongoose.connect('mongodb://localhost/fika-safe').then((client) => {
    db = client.db('fika-safe');

    // START THE SERVER
    app.listen(3000, () => {
        console.log("Listening on port 3001")
    });
}).catch((err) => {
    console.log(err.stack);

});

