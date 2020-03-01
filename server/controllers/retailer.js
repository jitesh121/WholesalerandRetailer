const Wholesaler = require('../models').Wholesaler;
const Retailer = require('../models').Retailer;
const Wholesalerandretailergroup = require('../models').Wholesalerandretailergroup;
const sequelize = require('sequelize');

var async = require('async');


exports.getAssociatedWholesaler = (req, res) => {
    console.log("Called getAssociatedWholesaler");
    return Retailer.findAll({
        where: { id: req.body.retailer_id },
        include: [{
          model: Wholesaler,
          as: 'wholesalers',
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


exports.getRetailerWithSingleWhaolesaler = (req, res) => {
    console.log("Called getRetailerWithSingleWhaolesaler");
    return Retailer.findAll({
        include: [{
          model: Wholesaler,
          as: 'wholesalers',
        }]
      }).then(result=>{
          let finalResultArray = [];
          for(let i=0;i<result.length;i++){
              let element = result[i];
              if(element.wholesalers.length ==1){
                finalResultArray.push(element);
              }
          }
          res.send(finalResultArray);
      }).catch(error=>{
          console.log(error);
          res.send(error);
      })
}



