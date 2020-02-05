const { Router } = require('express');
const DeveloperController = require('./controllers/DeveloperController');
const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Aou de desenvolvedores' });
});

routes.get('/developers', DeveloperController.index);
routes.post('/developers', DeveloperController.store);

module.exports = routes;
