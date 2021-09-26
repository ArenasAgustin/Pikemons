/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
};

const nameToFind = 'darkrai';
const nameToNoFind = 'greymon';
const idToFind = 6;
const idToNoFind = 2000;
const origin = 'api';

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));

  before(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));

  xdescribe('GET /pokemons', () => {
    it('should get 200', () =>
      agent.get('/pokemons').expect(200)
    );
  });

  xdescribe('GET /pokemons/find?name=', () => {
    it('should get 200', () =>
      agent.get(`/pokemons/find?name=${nameToFind}`).expect(200)
    );

    it('should get 404', () =>
      agent.get(`/pokemons/find?name=${nameToNoFind}`).expect(404)
    );
  });

  xdescribe('GET /pokemons/:idPokemon', () => {
   it('should get 200',  () =>
      agent.get(`/pokemons/${idToFind}?origin=${origin}`).expect(200)
    );

    it('should get 404',  () =>
      agent.get(`/pokemons/${idToNoFind}?origin=${origin}`).expect(404)
    );
  });
});
