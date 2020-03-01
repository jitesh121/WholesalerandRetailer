'use strict';

const Retailers = require('../models').Retailer;

module.exports = function() {
  return Retailers.bulkCreate(   [
    {
      name: 'Shivkripa Retails',
      mobile: 8898989898,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Hemraj Grocers',
      mobile: 8898989899,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Jitu Retails',
      mobile: 8898989888,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Indra Pvt Ltd',
      mobile: 7798989888,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ] ,);
};

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     /*
//       Add altering commands here.
//       Return a promise to correctly handle asynchronicity.
//     */
//    return queryInterface.bulkInsert(
//     'Retailers',
//     [
//       {
//         name: 'Shivkripa Retails',
//         mobile: 8898989898,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         name: 'Hemraj Grocers',
//         mobile: 8898989899,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         name: 'Jitu Retails',
//         mobile: 8898989888,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         name: 'Indra Pvt Ltd',
//         mobile: 7798989888,
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
//  */
//       return queryInterface.bulkDelete('Retailers', null, {});
   
//   }
// };
