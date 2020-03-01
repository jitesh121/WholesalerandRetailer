const Wholesaler = require('../models').Wholesaler;
const Retailer = require('../models').Retailer;
const Wholesalerandretailergroup = require('../models').Wholesalerandretailergroup;
const sequelize = require('sequelize');



exports.getAssociatedWholesaler = (retailer_id) => {
    let resultMap = {};
    return Retailer.findAll({
        where: { id: retailer_id },
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
      .then((whaolesalers) => {
        if (!whaolesalers) {
            resultMap.status = 200;
            resultMap.data = {message: 'Retailers Not Found'};
            return resultMap;
        }
        resultMap.status = 200;
        resultMap.data = whaolesalers;
        return resultMap;
    })
    .catch((error) =>{
        resultMap.status = 400;
        resultMap.data = error;
        return resultMap;
    });
}



exports.getRetailerWithSingleWhaolesaler = () => {
    let resultMap = {};
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
          resultMap.status = 200;
          resultMap.data = finalResultArray;
          return resultMap;
      }).catch(error=>{
          console.log(error);
          resultMap.status = 400;
          resultMap.data = error;
          return resultMap;
      })
}