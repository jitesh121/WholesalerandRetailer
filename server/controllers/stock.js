
const stockservice = require('../services/StockService');




exports.getStockSaleCount = async (req, res) => {
    console.log("Called getStockSaleCount");
    try {
        const result = await stockservice.getStockSaleCount();
        res.status(result.status).send(result.data);
      } catch (error) {
          console.log(error)
        res.status(400).send(error)
      }
}


exports.getTurnOverFromRetailer = async (req, res) => {
    console.log("Called getTurnOverFromRetailer");
    try {
        const result = await stockservice.getTurnOverFromRetailer();
        res.status(result.status).send(result.data);
      } catch (error) {
          console.log(error)
        res.status(400).send(error);
      }
}


exports.getNonBusinessWholesaler = async (req, res) => {
    console.log("Called getNonBusinessWholesaler");
    try {
        const result = await stockservice.getNonBusinessWholesaler(req.body.month);

        console.log("REULT",result)
        res.status(result.status).send(result.data);
      } catch (error) {
          console.log(error)
        res.status(400).send(error);
      }
}

// exports.getNonBusinessWholesaler = (req, res) => Stockdetail.findAll({
//     where: { month: req.body.month },
//     attributes: [
//         [sequelize.fn('DISTINCT', sequelize.col('wholesaler_id')), 'wholesaler'],
//     ]
// }).then(data => {
//     let distinctValue = data.map(eachRow => {
//         return eachRow['wholesaler']
//     });
//     Wholesaler.findAll({
//         where: {
//             id: { [sequelize.Op.notIn]: distinctValue }
//         }
//     }).then(result => {
//         res.send(result);
//     })
// }).catch(error => {
//     console.log(error)
//     res.status(400).send(error);
// });