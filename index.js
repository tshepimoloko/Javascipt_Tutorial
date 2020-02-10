const express = require ('express');
const bodyParse = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose');

// get a list of ninjas from the db
router.get('/ninjas', function(req, res){
    res.send({type: 'GET'});
});

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

// add a new ninja to the db
router.post('/ninjas', function(req, res){
    res.send({type: 'POST'});
    type: 'POST';
    name: req.body.name;
    rank: req.body.rank;
});

// update a ninja in the db
router.put('/ninjas/:id', function(req, res){
    res.send({type: 'PUT'});
});

// delete a ninja from the db
router.delete('/ninjas/:id', function(req, res){
  req.params.id;
    res.send({type: 'DELETE'});
});

module.exports = router;
