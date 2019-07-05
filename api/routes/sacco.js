const express = require('express');
const router = express.Router();

//Routing with express router
//get routes
router.get('/', (req, res)=> {
    res.status(200).json({
        message: "get requests to /riders"
    });
});

//post routes
router.post('/', (req, res)=> {
    let newSacco = req.body;
    newSacco.save()
    .then(sacco => {
    res.status(200).json({'sacco': 'Your data is saved'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

//update routes
router.update('/', (req, res)=> {
    res.status(200).json({
        message: "update requests to /riders"
    });
});

//put routes
router.put('/', (req, res)=> {
    res.status(200).json({
        message: "put requests to /riders"
    });
});

//patch routes
router.patch('/', (req, res)=> {
    res.status(200).json({
        message: "patch requests to /riders"
    });
});

//delete routes
router.delete('/', (Req, res)=> {
    res.status(200).json({
        message: "delete requests to /riders"
    });
});

module.exports = router;