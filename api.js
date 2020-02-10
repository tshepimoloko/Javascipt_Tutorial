const express = require('express');

// set up express app
const app = express();

router.get('/ninjas', function(req, res,next){
  /*res.send({ name: 'Yoshi' });
  res.send(ninjas);*/
  Ninja.geoNear{
    {type: 'Point', coordinates: [parseFloat(req.query.lng),parseFloat(req.query.lat)]}
    {maxDistance: 100000, spherical:true}
  }then(function(ninjas));
    res.send(ninjas);
});

// add new ninja to db
router.post('/ninjas', function(req, res,next){
  Ninja.create(req.body).then(function(ninja)){
    res.send(ninja);
  }).catch(next)
});

router.put('/ninjas/:id', function(req, res,next){
  Ninja.findByIdAndUpdate{_id.req.params.id}.req.body.then(funtion(){
    Ninja.findOne({_id.req.params.id}).req.body.then()function{

    }
  })
  res.send();
});

// listen for requests
router.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});
