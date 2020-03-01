
const retailerservice = require('../services/RetailerService');
var async = require('async');


exports.getAssociatedWholesaler = async (req, res) => {
    console.log("Called getAssociatedWholesaler");
    try {
        const associatedWholesaler = await retailerservice.getAssociatedWholesaler(req.body.retailer_id);
        res.status(associatedWholesaler.status).send(associatedWholesaler.data);
      } catch (error) {
          console.log(error)
        res.status(400).send(error)
      }
}


exports.getRetailerWithSingleWhaolesaler = async (req, res) => {
    console.log("Called getRetailerWithSingleWhaolesaler");
    try {
        const result = await retailerservice.getRetailerWithSingleWhaolesaler();
        res.status(result.status).send(result.data);
      } catch (error) {
          console.log(error)
        res.status(400).send(error)
      }
}



