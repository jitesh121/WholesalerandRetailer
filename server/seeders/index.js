const WholesalerSeed = require('./20200228100025-Wholesaler');
const RetailerSeed = require('./20200228102024-Retailer');
const StockSeed = require('./20200228110001-Stockdetail');
const AddressSeed = require('./20200228165428-Addresses');
const Wholesalerandretailer = require('./20200229105029-Wholesalerandretailer');

module.exports = function () {
    return Promise.all([ // Returning and thus passing a Promise here
        // Independent seeds first
        WholesalerSeed(),
        RetailerSeed(),
        StockSeed(),
        AddressSeed()
    ]).then((rusult) => {
        if (rusult) {
            Wholesalerandretailer()
        }
        // More seeds that require IDs from the seeds above

    }).then(() => {
        console.log('********** Successfully seeded db **********');
    });
}