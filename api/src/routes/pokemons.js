const router = require('express').Router();
const { poke } = require('../models/Pokemons.js');

router.get('/', async (req, res) => {
	const pokes = await poke.findAll();

	res.send(pokes);
})

module.exports = router;