'use strict';
const Addresses = require('../models').Address;

module.exports = function() {
  return Addresses.bulkCreate(   [
    {
      state: 'Rajasthan',
      city: 'Jaipur',
      addressline: 'shyam nagar',
      wholesaler_id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      state: 'Rajasthan',
      city: 'Udaipur',
      addressline: 'anand vihar',
      wholesaler_id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      state: 'Rajasthan',
      city: 'Kota',
      addressline: 'dadwara',
      wholesaler_id:2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      state: 'Madhya Pradesh',
      city: 'Sagar',
      addressline: 'B40,abc nagar',
      wholesaler_id:3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      state: 'Madhya Pradesh',
      city: 'Sagar',
      addressline: 'B40,abc nagar',
      retailer_id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      state: 'Rajasthan',
      city: 'Kota',
      addressline: 'dadwara',
      retailer_id:2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      state: 'Rajasthan',
      city: 'Kota',
      addressline: 'vigyan nagar',
      retailer_id:2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      state: 'Rajasthan',
      city: 'Jaipur',
      addressline: 'Vivek vihar',
      retailer_id:3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      state: 'Rajasthan',
      city: 'Udaipur',
      addressline: 'Fateh agar',
      retailer_id:4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], );
};


// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     /*
//       Add altering commands here.
//       Return a promise to correctly handle asynchronicity.
//     */
//    return queryInterface.bulkInsert(
//     'Addresses',
//     [
//       {
//         state: 'Rajasthan',
//         city: 'Jaipur',
//         addressline: 'shyam nagar',
//         wholesaler_id:1,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         state: 'Rajasthan',
//         city: 'Udaipur',
//         addressline: 'anand vihar',
//         wholesaler_id:1,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         state: 'Rajasthan',
//         city: 'Kota',
//         addressline: 'dadwara',
//         wholesaler_id:2,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         state: 'Madhya Pradesh',
//         city: 'Sagar',
//         addressline: 'B40,abc nagar',
//         wholesaler_id:3,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         state: 'Madhya Pradesh',
//         city: 'Sagar',
//         addressline: 'B40,abc nagar',
//         retailer_id:1,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         state: 'Rajasthan',
//         city: 'Kota',
//         addressline: 'dadwara',
//         retailer_id:2,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         state: 'Rajasthan',
//         city: 'Kota',
//         addressline: 'vigyan nagar',
//         retailer_id:2,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         state: 'Rajasthan',
//         city: 'Jaipur',
//         addressline: 'Vivek vihar',
//         retailer_id:3,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         state: 'Rajasthan',
//         city: 'Udaipur',
//         addressline: 'Fateh agar',
//         retailer_id:4,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     ], 
//     {});
//   },

//   down: (queryInterface, Sequelize) => {
//     /*
//       Add reverting commands here.
//       Return a promise to correctly handle asynchronicity.
//     */
//    return queryInterface.bulkDelete('Addresses', null, {});
//   }
// };
