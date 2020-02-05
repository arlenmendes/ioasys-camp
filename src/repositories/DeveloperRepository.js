const Developer = require('../models/Developer');

module.exports = {
  createUser: async userData => {
    return await Developer.create(userData);
  }
};
