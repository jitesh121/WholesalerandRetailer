'use strict';

const Wholesalerandretailergroup = require('../models').Wholesalerandretailergroup;
module.exports = function() {
  return Wholesalerandretailergroup.bulkCreate(   [
    {
      retailer_id:1,
      wholesaler_id:1
    },
    {
      retailer_id:2,
      wholesaler_id:1
    },
    {
      retailer_id:1,
      wholesaler_id:2
    },
    {
      retailer_id:4,
      wholesaler_id:2
    },
    {
      retailer_id:3,
      wholesaler_id:3
    },
  ], );
};

