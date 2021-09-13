const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const TypesRouter = require('./types.js');
const PokemonsRouter = require('./pokemons.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/types', TypesRouter);
router.use('/pokemons', PokemonsRouter);

module.exports = router;
