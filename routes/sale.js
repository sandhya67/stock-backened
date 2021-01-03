const express = require('express');
const router = express.Router();

//const auth = require('../middlewares/auth');
const saleController = require('../controllers/sale');


router.get('/', saleController.getAllSale);//api

router.post('/', saleController.addSale);

router.delete('/:id', saleController.checkSaleId, saleController.deleteSale);

module.exports = router;