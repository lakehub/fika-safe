import sourceMapSupport from 'source-map-support';
// import queryString from 'query-String'
// import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

// mongoose models    .

import { Sacco, Rider } from './db.models';

const _eval = require('eval');


mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

require('babel-polyfill');

const ObjectId = require('mongodb').ObjectID;

sourceMapSupport.install();

const express = require('express');
const bodyParser = require('body-parser');

// an instance of express
const app = express();

// mounting other middlewares into our server.js
app.use(express.static('static'));


const qpm = require('query-params-mongo');
const mongodb = require('mongodb');
const db = require('./database/keys').mongodbURI;

const processQuery = qpm({
  autoDetect: [{ fieldPattern: /_id$/, dataType: 'objectId' }],
  converters: { objectId: mongodb.ObjectID },
});


app.use(bodyParser.json());
// OUR SERVER CODE WILL GO HERE

// BASIC CRUD APIS

app.get('/', (req, res) => {
  res.json('this is our first server page');
});

app.post('/api/riders', (req, res) => {
  if (req.body.insurance.issue_date) req.body.insurance.issue_date = new Date(req.body.insurance.issue_date);
  const newRider = new Rider(req.body);
  newRider.save()
    .then((rider) => {
      console.log({ message: 'The rider was added successfully' });
      res.status(200).json({ rider });
    })
    .catch((error) => {
      res.status(400).send({ message: `Unable to add the rider: ${error}` });
    });
});

app.post('/api/saccos', (req, res) => {
  console.log(req.body);
  const newSacco = new Sacco(req.body);
  // if (!new_sacco._id) new_sacco._id = Schema.Types.ObjectId;
  newSacco.save()
    .then((sacco) => {
      console.log({ message: 'The sacco was added successfully' });
      res.status(200).json({ sacco });
    })
    .catch((err) => {
      res.status(400).send({ message: `Unable to add the sacco: ${err}` });
    });
});


/* GET ALL RIDERS */
app.get('/api/riders', (req, res) => {
  Rider.find().then((rider) => {
    if (!rider) res.status(404).json({ message: 'No avilable Riders in the system' });
    else res.json(rider);
  })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
});

/* GET SINGLE RIDER BY ID */
app.get('api/riders/:id', (req, res) => {
  let ridersId;
  try {
    ridersId = new ObjectId(req.params.id);
  } catch (error) {
    res.status(400).send({ message: `Invalid riders ID:${ridersId}` });
  }
  Rider.findById({ _id: ridersId }).then((rider) => {
    if (!rider) res.status(404).json({ message: `No such Rider: ${ridersId}` });
    else res.json(rider);
  })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
});

/* SAVE RIDERS */
app.post('api/riders', (req, res) => {

  const newRider = req.body;

  Rider.create(newRider).then((result) => {
    Rider.findById({ _id: result.insertedId }).then(((addedRider) => {
      res.json(addedRider);
    }));
  }).catch((error) => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});

/* UPDATE PRODUCT */
app.put('api/riders/:id', (req, res) => {
  let ridersId;
  try {
    ridersId = new ObjectId(req.params.id);
  } catch (error) {
    res.status(400).send({ message: `Invalid riders ID:${ridersId}` });
  }
  const newRider = req.body;
  Rider.findByIdAndUpdate({ _id: ridersId }, newRider).find({ _id: ridersId }).then((updatedRider) => {
    res.json(updatedRider);
  }).catch((err) => {
    console.log(err);
    res.status(500).json({ message: `Unable to update the riders information ${err}` });
  });
});


/* DELETE PRODUCT */
app.delete('api/riders/:id', (req, res) => {
  let ridersId;
  try {
    ridersId = new ObjectId(req.params.id);
  } catch (error) {
    res.status(400).send({ message: `Invalid riders ID:${ridersId}` });
  }
  // THE REQ.BODY IS OPTIONAL INTHE FINDBYIDANREMOVE METHOD
  Rider.findByIdAndRemove({ _id: ridersId }, req.body).then((result) => {
    res.json(result);
  }).catch((err) => {
    console.log({ message: `Unable to delelete the riders profile ${err}` });
  });
});
// THIS IS THE SACCOS APIS
// get all saccos
app.get('/api/saccos', (req, res) => {
  const { status, dateLte, dateGte } = req.query // destructuring
  console.log(new Date(dateLte));
  console.log(new Date(dateGte));
  if (status) {
    Sacco.find()
      .where('status').equals(status)
      .sort({ created: -1 })
      .exec()
      .then((saccos) => {
        res.status(200).json(saccos);
        console.log(saccos)
      }).catch((err) => {
        res.send(`Internal server error${err.stack}`).status(400);
      });
  } else if (dateGte && dateLte) {
    Sacco.find()
      .where('created').gt(new Date(dateGte)).lt(new Date(dateLte))
      .sort({ created: -1 })
      .exec()
      .then((saccos) => {
        res.status(200).json(saccos);
        console.log(saccos)
      }).catch((err) => {
        res.send(`Internal server error${err.stack}`).status(400);
      });
  } else {
    Sacco.find()
      .sort({ created: -1 })
      .exec()
      .then((saccos) => {
        res.status(200).json(saccos);
        console.log(saccos)
      }).catch((err) => {
        res.send(`Internal server error${err.stack}`).status(400);
      });
  }

});
app.get('/api/saccos/:id', (req, res) => { // parameter
  let saccoId;
  try {
    saccoId = req.params.id;
  } catch (error) {
    res.json({ message: `Invalid sacco id ${error}` });
  }

  Sacco.findById({ _id: saccoId }).then((sacco) => {
    res.json(sacco).status(200);
  }).catch((err) => {
    res.send(`Internal server error${err.stack}`).status(400);
  });
});

// post api
app.post('api/saccos', (req, res) => {
  const newSacco = new Sacco(req.body);
  newSacco.save().then((addedSacco) => {
    // console.log(addedSacco);
    res.status(200).json(addedSacco);
  }).catch((error) => {
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});

app.delete('/api/saccos/:id', (req, res) => {
  let saccosId;
  try {
    saccosId = req.params.id;
    console.log(saccosId)
  } catch (error) {
    res.status(400).send({ message: `Invalid saccos ID:${saccosId}` });
  }
  // THE REQ.BODY IS OPTIONAL INTHE FINDBYIDANREMOVE METHOD
  Sacco.findByIdAndRemove({ _id: saccosId }).then((result) => {
    res.json(result);
  }).catch((err) => {
    console.log({ message: `Unable to delelete the saccos profile ${err}` });
  });
});


app.put('api/saccos/:id', (req, res) => {
  let saccosId;
  try {
    saccosId = req.params.id;
  } catch (error) {
    res.status(400).send({ message: `Invalid saccos ID:${saccosId}` });
  }
  const newSacco = req.body;

  Sacco.findByIdAndUpdate({ _id: saccosId }, newSacco).find({ _id: saccosId }).then((updatedSacco) => {
    res.json(updatedSacco);
  }).catch((err) => {
    console.log(err);
    res.status(500).json({ message: `Unable to update the saccos information ${err}` });
  });
});


// creating a connection to mongoose
// 'mongodb://localhost/fika-safe'
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => {
    app.listen(3000, () => {
      console.log('Listening on port 3000');
    });
  }).catch((error) => {
    console.log({ message: `Unable to establish a connection to the server ${error}` });
  });
