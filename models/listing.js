module.exports = function(sequelize, t) {

  return sequelize.define('Listing', {
    title: {
      type: t.STRING,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    description: {
      type: t.STRING,
      allowNull: true
    },
    programmeNotes: {
      type: t.TEXT,
      allowNull: true
    },
    venue: t.STRING,
    address: t.STRING,
    latitude: {
      type: t.FLOAT,
      validate: {
        isFloat: true,
        min: -90.0,
        max: 90.0,
      },
      allowNull: true
    },
    longitude: {
      type: t.FLOAT,
      validate: {
        isFloat: true,
        min: -180.0,
        max: 180.0
      },
      allowNull: true
    },
    mapZoom: {
      type: t.INTEGER,
      validate: {
        isInt: true
      },
      allowNull: true
    },
    date: {
      type: t.DATE,
      validate: {
        notNull: true
      }
    },
    payWhatYouCan: {
      type: t.BOOLEAN,
      defaultValue: 0
    },
    free: {
      type: t.BOOLEAN,
      defaultValue: 0
    },
    ticketPrice: {
      type: t.STRING,
      allowNull: true
    },
    ticketSpecialPrice: {
      type: t.STRING,
      allowNull: true
    },
    ticketPurchaseLink: {
      type: t.STRING,
      validate: {
        isUrl: true
      },
      allowNull: true
    },
    phoneNumber: {
      type: t.STRING,
      allowNull: true
    },
    picture: {
      type: t.STRING,
      validate: {
        isUrl: true
      },
      allowNull: true
    },
    email: {
      type: t.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notNull: true
      }
    },
    contactName: t.STRING
  });
};
