const Wholesaler = require('../models').Wholesaler;
const Retailer = require('../models').Retailer;
const Address = require('../models').Address;
const Wholesalerandretailergroup = require('../models').Wholesalerandretailergroup;



exports.getAllActiveAddresses = (wholesaler_id) => {
    return Wholesaler.findAll({
        where: { id: wholesaler_id },
        include: [
            { model: Address, as: 'address' }
        ]
    }).then((address) => {
        return address;
    })
        .catch((error) =>{return error});
}


exports.getAssociatedRetailers = (wholesaler_id) => {
    let resultMap = {};
    return Wholesaler.findAll({
        where: { id: wholesaler_id },
        include: [{
          model: Retailer,
          as: 'retailer',
          required: false,
          // Pass in the Product attributes that you want to retrieve
          attributes: ['id', 'name', 'mobile'],
          through: {
            // This block of code allows you to retrieve the properties of the join table
            model: Wholesalerandretailergroup,
            as: 'Wholesalerandretailergroup'
          }
        }]
      })
        .then((retailers) => {
            if (!retailers) {
                resultMap.status = 200;
                resultMap.data = {message: 'Retailers Not Found'};
                return resultMap;
            }
            resultMap.status = 200;
            resultMap.data = retailers;
            return resultMap;
        })
        .catch((error) =>{
            resultMap.status = 400;
            resultMap.data = error;
            return resultMap;
        });
}