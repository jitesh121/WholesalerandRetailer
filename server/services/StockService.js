const Stockdetail = require('../models').Stockdetail;
const Wholesaler = require('../models').Wholesaler;
const Retailer = require('../models').Retailer;
const sequelize = require('sequelize');



exports.getStockSaleCount = () => {
    let resultMap = {};
    return Stockdetail.findAll({
        attributes: ['month', [sequelize.fn('sum', sequelize.col('stock_amount')), 'turnover']],
        include: [{ model: Wholesaler, as: 'wholesaler' }],
        group: ['Stockdetail.month', 'wholesaler.id'],
        raw: true,
        order: sequelize.literal('turnover DESC')
    })
      .then((stocksamount) => {
        if (!stocksamount) {
            resultMap.status = 200;
            resultMap.data = {message: 'Stocksamount Not Found!'};
            return resultMap;
        }
        resultMap.status = 200;
        resultMap.data = stocksamount;
        return resultMap;
    })
    .catch((error) =>{
        resultMap.status = 400;
        resultMap.data = error;
        return resultMap;
    });
}

exports.getTurnOverFromRetailer = () => {
    let resultMap = {};
    return Stockdetail.findAll({
        attributes: [[sequelize.fn('sum', sequelize.col('stock_amount')), 'turnover']],
        include: [{ model: Wholesaler, as: 'wholesaler' }, { model: Retailer, as: 'retailer' }],
        group: ['retailer.id', 'wholesaler.id'],
        raw: true,
        order: sequelize.literal('turnover DESC')
    })
      .then((stocksamount) => {
        if (!stocksamount) {
            resultMap.status = 200;
            resultMap.data = {message: 'Turnover Not Found!'};
            return resultMap;
        }

        let stockAmount = stocksamount.map(eachRow => {
            let obj = {};
            obj.wholesaler = eachRow['wholesaler.name'];
            obj.retailer = eachRow['retailer.name'];
            obj.turnover = eachRow.turnover;
            return obj;
        })
        resultMap.status = 200;
        resultMap.data = stockAmount;
        return resultMap;
    })
    .catch((error) =>{
        resultMap.status = 400;
        resultMap.data = error;
        return resultMap;
    });
}


exports.getNonBusinessWholesaler = (month) => {
    var resultMap = {};
    return Stockdetail.findAll({
        where: { month: month },
        attributes: [
            [sequelize.fn('DISTINCT', sequelize.col('wholesaler_id')), 'wholesaler'],
        ]
    }).then(async(data) => {
        let distinctValue = data.map(eachRow => {
            return eachRow['wholesaler']
        });
     

        let result = await Wholesaler.findAll({
            where: {
                id: { [sequelize.Op.notIn]: distinctValue }
            }
        })
        resultMap.status = 200;
        resultMap.data = result;
        return resultMap;
    })
    .catch((error) =>{
        resultMap.status = 400;
        resultMap.data = error;
        return resultMap;
    });
}