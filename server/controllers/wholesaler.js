const Wholesaler = require('../models').Wholesaler;
const Retailer = require('../models').Retailer;
const Address = require('../models').Address;
const Wholesalerandretailergroup = require('../models').Wholesalerandretailergroup;


var async = require('async');




exports.getAllActiveAddresses = (req, res) => {
    console.log("CALEED");
    return Wholesaler.findAll({
        where: { id: req.body.wholesaler_id },
        include: [
            { model: Address, as: 'address' }
        ]
    })
        .then((address) => {
            if (!address) {
                return res.status(404).send({
                    message: 'Address Not Found',
                });
            }
            return res.status(200).send(address);
        })
        .catch((error) => res.status(400).send(error));
}

exports.getAssociatedRetailers = (req, res) => {
    console.log("Called getAssociatedRetailers");
    return Wholesaler.findAll({
        where: { id: req.body.wholesaler_id },
        include: [{
          model: Retailer,
          as: 'retailer',
          required: false,
          // Pass in the Product attributes that you want to retrieve
          attributes: ['id', 'name'],
          through: {
            // This block of code allows you to retrieve the properties of the join table
            model: Wholesalerandretailergroup,
            as: 'Wholesalerandretailergroup'
          }
        }]
      })
        .then((retailers) => {
            if (!retailers) {
                return res.status(404).send({
                    message: 'Retailers Not Found',
                });
            }
            return res.status(200).send(retailers);
        })
        .catch((error) =>{
            console.log(error)
            res.status(400).send(error)
        });
}



