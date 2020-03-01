var express = require('express');
var router = express.Router();
const StockController = require('../controllers').stock;


router.get('/getStockSaleCount', StockController.getStockSaleCount);
router.get('/getTurnOverFromRetailer', StockController.getTurnOverFromRetailer);
router.post('/getNonBusinessWholesaler', StockController.getNonBusinessWholesaler);

module.exports = router;