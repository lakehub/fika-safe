import sourceMapSupport from 'source-map-support'
// import queryString from 'query-string'
import { MongoClient } from 'mongodb';


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
// OUR SERVER CODE WILL GO HEREa

app.get('/', (req, res) => {
    res.json(`this is our first server page`);
})





let db = null;

// Initialize connection once
// MongoClient.connect("mongodb://localhost:27017/test", (err, client) => {
//     if (err) throw err;

//     db = client.db('test');

//     // Start the application after the database connection is ready
//     app.listen(3000, () => {
//         console.log("Listening on port 3001")
//     });

// });

app.listen(3000, () => {
    console.log("Listening on port 3001")
});