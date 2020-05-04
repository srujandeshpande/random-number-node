const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const RandomSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The todo text field is required']
  }
})

//create model for todo
const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;
