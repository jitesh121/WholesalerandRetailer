
const wholesalerservice = require('../services/WholesalerService');

var async = require('async');




exports.getAllActiveAddresses = async (req, res) => {
    console.log("CALEED");
    try {
        const getAllActiveAddresses = await wholesalerservice.getAllActiveAddresses(req.body.wholesaler_id);
        if (getAllActiveAddresses.length > 0) {
            return res.status(200).send(getAllActiveAddresses);
        } else {
            return res.status(200).send("No Data Found!");
        }
      } catch (error) {
          console.log(error)
        res.status(400).send(error)
      }
}

exports.getAssociatedRetailers = async (req, res) => {
    console.log("Called getAssociatedRetailers");
    try {
        const result = await wholesalerservice.getAssociatedRetailers(req.body.wholesaler_id);
          res.status(result.status).send(result.data);
      } catch (error) {
        res.status(400).send(error)
      }
}



