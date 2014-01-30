module.exports = function(env, app, models) {

  var db = require('./dbController')(models);
  var dev = require('./devController')(models);
  var auth = require('./auth')(env);

  app.post('/auth', auth.token);

  app.get('/listings', db.get.all);
  app.get('/listings/:id', db.get.id);

  // Protected routes
  app.post('/listings', auth.verify, db.post);
  app.put('/listings/:id', auth.verify, db.put);
  app.delete('/listings/:id', auth.verify, db.delete);

  // CAUTION: Use with 'dev' db only
  app.get('/dev/fake', auth.dev, dev.fake);

};
