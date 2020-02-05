const Developer = require('../models/Developer');
const Service = require('../services/DeveloperService');

module.exports = {
  index: async (req, res) => {
    const developers = await Developer.find();
    return res.json(developers);
  },

  store: async (req, res) => {
    const { name, email, github, age, techs } = req.body;

    const data = await Service.store({ name, email, github, age, techs });

    if (data.success) {
      return res.status(201).json(data.developer);
    }

    return res.status(422).json({ errors: data.errors });
  }
};
