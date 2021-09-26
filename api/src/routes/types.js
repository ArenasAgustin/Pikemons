const router = require('express').Router();
const { Type } = require('../db.js');

//Creo el Tipo
router.post('/', async (req, res) => {
	const { name } = req.body;
	try {
		const type = await Type.create({name});

		res.status(200).send(type);
	}

	catch(error) {
		res.status(501).send(error);
	}
})

//Busco todos los tipos
router.get('/', async (req, res) => {
	try {
		const types = await Type.findAll();

		res.status(200).send(types);
	}

	catch(error) {
		res.status(501).send(error);
	}
})

module.exports = router;