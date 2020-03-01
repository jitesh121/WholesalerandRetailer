var express = require('express');
var router = express.Router();
const RetailerController = require('../controllers').retailer;



router.post('/getAssociatedWholesaler', RetailerController.getAssociatedWholesaler);
router.post('/getRetailerWithSingleWhaolesaler', RetailerController.getRetailerWithSingleWhaolesaler);
module.exports = router;