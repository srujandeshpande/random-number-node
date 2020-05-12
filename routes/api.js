const express = require ('express');
const router = express.Router();
const Random = require('../models/random');

router.get('/dice', (req, res, next) => {
  var num = Math.floor(Math.random() * 6) + 1;
  res.json(num);
});

router.get('/dice:sides', (req, res, next) => {
  sids = req.params.sides
  var num = Math.floor(Math.random() * sids) + 1;
  res.json(num);
});

router.post('/todos', (req, res, next) => {
  if(req.body.action){
    Todo.create(req.body)
      .then(data => res.json(data))
      .catch(next)
  }else {
    res.json({
      error: "The input field is empty"
    })
  }
});

router.delete('/todos/:id', (req, res, next) => {
  Todo.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;
