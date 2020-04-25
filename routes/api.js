const express = require ('express');
const router = express.Router();
const Random = require('../models/random');

router.get('/random', (req, res, next) => {

  //this will return all the data, exposing only the id and action field to the client
  Random.find({}, 'action')
    .then(data => res.json(data))
    .catch(next)
});

router.post('/random', (req, res, next) => {
  if(req.body.action){
    Random.create(req.body)
      .then(data => res.json(data))
      .catch(next)
  }else {
    res.json({
      error: "The max number is empty"
    })
  }
});

router.delete('/random/:id', (req, res, next) => {
  Random.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;
