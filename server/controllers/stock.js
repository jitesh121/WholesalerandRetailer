const Stockdetail = require('../models').Stockdetail;
const Wholesaler = require('../models').Wholesaler;
const Retailer = require('../models').Retailer;
const sequelize = require('sequelize');



exports.getStockSaleCount = (req, res) => Stockdetail.findAll({
    attributes: ['month', [sequelize.fn('sum', sequelize.col('stock_amount')), 'turnover']],
    include: [{ model: Wholesaler, as: 'wholesaler' }],
    group: ['Stockdetail.month', 'wholesaler.id'],
    raw: true,
    order: sequelize.literal('turnover DESC')
}).then((stocksamount) => {
    if (!stocksamount) {
        return res.status(404).send({
            message: 'Retailers Not Found',
        });
    }
    return res.status(200).send(stocksamount);
})
    .catch((error) => {
        console.log(error)
        res.status(400).send(error)
    });


exports.getTurnOverFromRetailer = (req, res) => Stockdetail.findAll({
    attributes: [[sequelize.fn('sum', sequelize.col('stock_amount')), 'turnover']],
    include: [{ model: Wholesaler, as: 'wholesaler' }, { model: Retailer, as: 'retailer' }],
    group: ['retailer.id', 'wholesaler.id'],
    raw: true,
    order: sequelize.literal('turnover DESC')
}).then((stocksamount) => {
    if (!stocksamount) {
        return res.status(404).send({
            message: 'Retailers Not Found',
        });
    }
    let stockAmount = stocksamount.map(eachRow => {
        let obj = {};
        obj.wholesaler = eachRow['wholesaler.name'];
        obj.retailer = eachRow['retailer.name'];
        obj.turnover = eachRow.turnover;
        return obj;
    })
    return res.status(200).send(stockAmount);
})
    .catch((error) => {
        console.log(error)
        res.status(400).send(error)
    });


exports.getNonBusinessWholesaler = (req, res) => Stockdetail.findAll({
    where: { month: req.body.month },
    attributes: [
        [sequelize.fn('DISTINCT', sequelize.col('wholesaler_id')), 'wholesaler'],
    ]
}).then(data => {
    let distinctValue = data.map(eachRow => {
        return eachRow['wholesaler']
    });
    Wholesaler.findAll({
        where: {
            id: { [sequelize.Op.notIn]: distinctValue }
        }
    }).then(result => {
        res.send(result);
    })
}).catch(error => {
    console.log(error)
    res.status(400).send(error);
});