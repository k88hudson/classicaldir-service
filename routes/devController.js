module.exports = function(db) {

  var Faker = require('../util/faker');
  var faker = new Faker();

  return {
    // Use with caution
    fake: function(req, res, next) {

      if (req.query.amount) {

        var fakelistings = faker.listings(+req.query.amount);

        db.listing
          .bulkCreate(fakelistings)
          .success(function(data) {
            res.json(data);
          })
          .error(function(err) {
            res.statusCode = 500;
            res.json(err);
          });

      } else {

        var fakelisting = faker.listing();

        db.listing
          .create(fakelisting)
          .success(function(data) {
            res.json(data);
          })
          .error(function(err) {
            res.statusCode = 500;
            res.json(err);
          });
      }
    }
  };

};
