const mongoose = require('mongoose');

const DeveloperSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    unique: true,
    required: true
  },

  techs: {
    type: [String],
    required: true
  },

  age: Number,

  github: String
});

module.exports = mongoose.model('Developers', DeveloperSchema);
