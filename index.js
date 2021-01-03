const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 8080;

const db = require('./util/database');

// routes
//const employeeRoutes = require('./routes/employees');
const productRoutes = require('./routes/product');
 const companyRoutes = require('./routes/company');
 const investorRoutes = require('./routes/investor');
 const saleRoutes = require('./routes/sale');
const usersRoutes = require('./routes/users');

// cors middleware
app.use(cors());

// bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use('/employees', employeeRoutes);
//Entry point
app.use('/product', productRoutes);
 app.use('/company', companyRoutes);
 app.use('/investor', investorRoutes);
 app.use('/sale', saleRoutes);
app.use('/users', usersRoutes);

// error handling middleware
// app.use((err, req, res, next) => {
//     res.send({
//         error: true,
//         message: 'Server Error',
//         err: err
//     });
// });

app.listen(port, () => {
    console.log(`App is listening to port ${port}`);
});

