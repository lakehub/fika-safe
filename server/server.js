import sourceMapSupport from 'source-map-support'
// import queryString from 'query-String'
import { MongoClient } from 'mongodb';
import mongoose from "mongoose";
import { Schema } from "mongoose";
require('babel-polyfill');

// UNIQUE VALIDATOR
const mongooseUniqueValidator = require('mongoose-unique-validator');

const ObjectId = require('mongodb').ObjectID;

sourceMapSupport.install()

const express = require('express');
const bodyParser = require('body-parser');

// an instance of express
const app = express();

// mounting other middlewares into our server.js
//app.use(express.static('static'));


var qpm = require('query-params-mongo');
var mongodb = require('mongodb');

var processQuery = qpm({
    autoDetect: [{ fieldPattern: /_id$/, dataType: 'objectId' }],
    converters: { objectId: mongodb.ObjectID }
});




app.use(bodyParser.json());

// mongoose models
import { Sacco, Rider } from './db.models.js'
// OUR SERVER CODE WILL GO HERE

// BASIC CRUD APIS

app.get('/', (req, res) => {
    res.json(`this is our first server page`);
})

app.post(`/api/riders`, (req, res) => {
    const new_rider = new Rider(req.body);
    new_rider.save()
        .then(rider => {
            console.log({ message: `The rider was added successfully` })
            res.status(200).json({ rider });
        })
        .catch(error => {
            res.statFailed to load resource: the server responded with a status of 404 (Not Found)
            us(400).send({ message: `Unable to add the rider: ${error}` });
        });
});

app.post(`/api/saccos`, (req, res) => {
    console.log(req.body);
    const new_sacco = new Sacco(req.body);
    // if (!new_sacco._id) new_sacco._id = Schema.Types.ObjectId;
    new_sacco.save()
        .then(sacco => {
            console.log({ message: `The sacco was added successfully` })
            res.status(200).json({ sacco });
        })
        .catch(err => {
            res.status(400).send({ message: `Unable to add the sacco: ${err}` });
        });
});


/* GET ALL RIDERS */
app.get('/api/riders', (req, res) => {
    Rider.find().then(rider => {
        if (!rider) res.status(404).json({ message: `No avilable Riders in the system` });
        else res.json(rider);
    })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: `Internal Server Error: ${error}` });
        });
});

/* GET SINGLE RIDER BY ID */
app.get('api/riders/:id', (req, res) => {
    let riders_id;
    try {
        riders_id = new ObjectId(req.params.id);
    } catch (error) {
        res.status(400).send({ message: `Invalid riders ID:${riders_id}` });
    }
    Rider.findById({ _id: riders_id }).then(rider => {
        if (!rider) res.status(404).json({ message: `No such Rider: ${riders_id}` });
        else res.json(rider);
    })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: `Internal Server Error: ${error}` });
        }); 0
});

/* SAVE RIDERS */
app.post('api/riders', (req, res) => {
    let new_rider = req.body;
    Rider.create(new_rider).then((result) => {
        Rider.findById({ _id: result.insertedId }).then((added_rider => {
            res.json(added_rider);
        }))
    }).catch(error => {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
});

/* UPDATE PRODUCT */
app.put('api/riders/:id', (req, res) => {
    let riders_id;
    try {
        riders_id = new ObjectId(req.params.id);
    } catch (error) {
        res.status(400).send({ message: `Invalid riders ID:${riders_id}` });
    }
    const new_rider = req.body;

    Rider.findByIdAndUpdate({ _id: riders_id }, new_rider).find({ _id: riders_id }).then((updated_rider) => {
        res.json(updated_rider)
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ message: `Unable to update the riders information ${err}` })

    });
});



/* DELETE PRODUCT */
app.delete('api/riders/:id', (req, res) => {
    let riders_id;
    try {
        riders_id = new ObjectId(req.params.id);
    } catch (error) {
        res.status(400).send({ message: `Invalid riders ID:${riders_id}` });
    }
    // THE REQ.BODY IS OPTIONAL INTHE FINDBYIDANREMOVE METHOD
    Rider.findByIdAndRemove({ _id: riders_id }, req.body).then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log({ message: `Unable to delelete the riders profile ${err}` })
    });
});

//populating query
//set for testing in the code
//used with route
router.get('/sacco', (req,res,next) =>{
    Sacco.find().select('riders quantity _id')
    .populate('riders', 'name')
    .exec().then(rider => {
        res.status(200).json({
            count: rider.length,
            riders: rider.map(doc => {
                return{
                    _id: rider._id,
                    riders: rider.riders,
                    quantity: rider.quantity,
                    request:{
                        type: 'GET',
                        url: 'http://localhost:3030/orders/' + doc._id
                    }
                }
            })
        })
    }).catch(err => {
        res.status(500).json({
            error: err
        })
    })
 })

 router.get('/:ridersId', (req,res,next) =>{
    Rider.findById(req.params.orderId)
    .populate('sacco')
    .exec()
    .then(rider => {
        if(!rider){
            return res.status(404).json({
                message: 'rider not found'
            })
        }
        res.status(200).json({
            rider: rider,
            request: {
                type: 'GET',
                url: 'http://localhost:3030/orders'
            }
        })
    }).catch(err => {
        res.status(500).json({
            error: err 
        })
    })
})
 



//creating a connection to mongoose

mongoose.connect('mongodb://127.0.0.1:27017/fika-safe', { useNewUrlParser: true })
    .then(async () => {
        app.listen(3000, () => {
            console.log("Listening on port 3000")
        });
    });

