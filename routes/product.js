const express = require('express');
const router = express.Router();

//const auth = require('../middlewares/auth');
//const companyController = require('../controllers/company');
const productController = require('../controllers/product');


// router.get('/', companyController.getAllCompany);//api

// router.post('/', companyController.addCompany);

// router.put('/:cid',  companyController.checkCompanyId, companyController.updateCompany);

// router.delete('/:cid', companyController.checkCompanyId, companyController.deleteCompany);

router.get('/',  productController.getAllProduct);//api

router.get('/:pid',  productController.getProduct);

router.post('/',  productController.addProduct);

router.put('/:pid',  productController.checkProductId, productController.updateProduct);

router.delete('/:pid',  productController.checkProductId, productController.deleteProduct);

module.exports = router;