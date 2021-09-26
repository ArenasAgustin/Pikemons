const { Pokemon, Type, conn } = require('../../src/db.js');
const { expect } = require('chai');

xdescribe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));

    describe('name', () => {
      it('Should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });

      it('Should work when its a valid name', () => {
        Pokemon.create({ name: 'Pokeagus' });
      });

      it('Should throw an error if name is repeated', (done) => {
        Pokemon.create({ name: 'Agusmon' });
        Pokemon.create({ name: 'Agusmon' })
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
    });
  });
});

xdescribe('Type model', () => {;

  describe('Add new type', () => {

    it('Should throw an error if name is null', done => {
      Type.create({})
        .then(() => done(new Error('It requires a valid name')))
        .catch(() => done());
    });

    it('Should throw an error if name is repeated', done => {
      Type.create({name: 'fire'})
        .then(() => done(new Error('It requires a valid name')))
        .catch(() => done());
    });

    it('Should work when its a valid name', () => {
      Type.create({ name: 'Agustype' });
    });
  })
});