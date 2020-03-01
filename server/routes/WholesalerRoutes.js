var express = require('express');
var router = express.Router();
const WholesalerController = require('../controllers').wholesaler;


router.post('/getAllActiveAddresses', WholesalerController.getAllActiveAddresses);
router.post('/getAssociatedRetailers', WholesalerController.getAssociatedRetailers);

module.exports = router;