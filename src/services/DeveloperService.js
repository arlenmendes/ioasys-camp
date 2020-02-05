const Developer = require('../models/Developer');
const repository = require('../repositories/DeveloperRepository');

module.exports = {
  store: async ({ name, email, github, age, techs }) => {
    let errors = [];

    if (!name || name === '') {
      errors.push('Nome é obrigatorio');
    }

    if (!email || email === '') {
      errors.push('Email é obrigatório');
    } else {
      const devWithEmail = await Developer.findOne({ email });

      if (devWithEmail) {
        errors.push('Email já cadastrado no sistema');
      }
    }

    if (errors.length > 0) {
      return { success: false, errors };
    }

    const developer = await repository.createUser({
      name,
      email,
      github,
      age,
      techs
    });

    return { success: true, developer };
  }
};
