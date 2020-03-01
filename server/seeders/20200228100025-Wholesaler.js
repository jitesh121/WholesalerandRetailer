'use strict';
const Wholesalers = require('../models').Wholesaler;

module.exports = function() {
  return Wholesalers.bulkCreate(   [
    {
      name: 'Gajanan Pvt Ltd',
      mobile: 9898989898,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Rahul Traders',
      mobile: 9898989899,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Jaipur Stocks',
      mobile: 9898989888,
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
//     'Wholesalers',
//     [
//       {
//         name: 'Gajanan Pvt Ltd',
//         mobile: 9898989898,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         name: 'Rahul Traders',
//         mobile: 9898989899,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         name: 'Jaipur Stocks',
//         mobile: 9898989888,
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
   
//    return queryInterface.bulkDelete('Wholesalers', null, {});
//   }
// };
