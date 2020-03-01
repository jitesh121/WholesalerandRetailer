const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

var db = require('./server/models/index');
const wholesalerRoutes = require('./server/routes/WholesalerRoutes');
const retailerRoutes = require('./server/routes/RetailerRoutes');
const stockRoutes = require('./server/routes/StockDetailRoutes');
const Seed = require('./server/seeders/index');

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)


app.use('/api/v1/wholesaler', wholesalerRoutes);
app.use('/api/v1/retailer', retailerRoutes);
app.use('/api/v1/stock', stockRoutes);

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
    db.sequelize.sync({force: false}).then(()=>{
        // return Seed();
    }).catch(err=>{
        console.log(err);
    });
})

module.exports = app;