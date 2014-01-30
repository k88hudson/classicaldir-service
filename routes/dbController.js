module.exports = function(db) {

  return {

    get: {
      all: function(req, res) {
        var limit = req.query.limit || 30;
        var order = req.query.order || 'date';

        db.listing
          .findAll({
            limit: limit,
            order: order
            // where: {
            //   date: {
            //     gte: new Date()
            //   }
            // }
          })
          .success(function(data) {
            res.json(data);
          })
          .error(function(err) {
            res.statusCode = 500;
            res.json(err);
          });
      },
      id: function(req, res) {

        db.listing
          .find(req.params.id)
          .success(function(data) {
            res.json(data);
          });

      }
    },

    post: function(req, res) {

      // Authentication
      if (!req.body) {
        return res.send(401, 'You may not create an empty listing');
      }
      if (req.body.email !== req.user.email) {
        return res.send(403, 'You must authorize this listing with a persona-verified email');
      }

      db.listing
        .create(req.body)
        .success(function(data) {
          res.json(data);
        })
        .error(function(err) {
          res.send(500, err);
        });
    },

    put: function(req, res) {
      var id = req.params.id;
      var updatedAttributes = req.body;

      // First, find the listing
      db.listing
        .find(id)
        .success(function(listingInstance) {

          if (listingInstance) {
            // Authentication
            if (!req.admin || !listingInstance.email === req.user.email) {
              return res.send(403, 'You are not authorized to edit this event');
            }
            listingInstance
              .updateAttributes(updatedAttributes)
              .success(function(data) {
                res.json(data);
              })
              .error(function(err) {
                res.send(500, err);
              });
          } else {
            res.statusCode = 404;
            return res.json({
              error: 'No listing found for id ' + id
            });
          }
        })
        .error(function(err) {
          res.send(500, err);
        });
    },

    delete: function(req, res) {
      var id = req.params.id;

      db.listing
        .find(id)
        .success(function(listingInstance) {
          if (listingInstance) {
            // Authentication
            if (!req.admin || !listingInstance.email === req.email) {
              return res.send(403, 'You are not authorized to edit this listing');
            }
            listingInstance
              .destroy()
              .success(function(data) {
                res.json(data);
              })
              .error(function(err) {
                res.statusCode = 500;
                res.json(err);
              });
          } else {
            return res.send(404, 'No listing found for id ' + id);
          }
        })
        .error(function(err) {
          res.send(500, err);
        });
    }
  };

};
