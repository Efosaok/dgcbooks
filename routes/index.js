const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
	res.render('home');
});

router.get('/bookprofile', (req,res) => {
	res.render('order1');
});

router.get('/orderbook', (req, res) => {
	res.render('orderform');
});

router.get('/paymentform', (req,res) => {
	res.render('paymentform');
});
module.exports = router;