const router = require('express').Router();
const { type } = require('../models/Type.js');

router.get('/', async (req, res) => {
	const types = await type.findAll();

	res.send(types);
})

module.exports = router;