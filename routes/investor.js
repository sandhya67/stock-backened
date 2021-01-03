const express = require('express');
const router = express.Router();

//const auth = require('../middlewares/auth');
const investorController = require('../controllers/investor');


router.get('/', investorController.getAllInvestor);//api

router.post('/', investorController.addInvestor);

router.put('/:id',  investorController.checkInvestorId, investorController.updateInvestor);

router.delete('/:id', investorController.checkInvestorId, investorController.deleteInvestor);

module.exports = router;