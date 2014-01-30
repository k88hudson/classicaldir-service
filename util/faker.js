module.exports = function faker() {
  var self = this;

  // Export Faker
  var faker = self.faker = require('Faker');

  // Generate a single listing
  self.listing = function() {
    var data = {
      title: faker.Company.bs(),
      description: faker.Lorem.sentence(),
      programmeNotes: faker.Lorem.paragraph(),
      address: faker.Address.streetAddress(),
      latitude: faker.Address.latitude(),
      longitude: faker.Address.longitude(),
      mapZoom: 12
      date: new Date(),
      ticketPurchaseLink: 'https://' + faker.Internet.domainName() + '/tickets',
      email: faker.Internet.email(),
      contactName: faker.Name.findName(),
      ticketPrice: '$20',
      ticketSpecialPrice: '$15 Students',
      phoneNumber: faker.PhoneNumber.phoneNumber()
    };
    console.log(data);
    return data;
  };

  // Generate a single invalid listings
  self.invalidListing = function() {
    return {
      title: 'Invalid Thing',
      latitude: 'This is not a valid latitude'
    };
  };

  // Generate an array of valid fake listings of length n
  self.listings = function(n) {
    var listings = [];
    for (var i = 0; i < n; i++) {
      events.push(self.listing());
    }
    return listings;
  };

};
