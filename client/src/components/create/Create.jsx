import React from 'react';
import {  useDispatch } from 'react-redux';
import { addPokemon } from '../../actions/pokemon';
import NavBar from '../navbar/NavBar';
import validate from './utils/validate';

export default function  Create() {
  const dispatch = useDispatch();
  const [input, setInput] = React.useState({
    name: '',
    hp: null,
    attack: null,
    defense: null,
    special_attack: null,
    special_defense: null,
    speed: null,
    weight: null,
    height: null,
    types: [],
    sprite: ''
  })
  const [errors, setErrors] = React.useState({});

  const handleInputChange = event => {
    setInput((prev) => ({...prev, [event.target.name]: event.target.value}));

    setErrors(validate({...input, [event.target.name]: event.target.value}));
  }

  const handleSubmit =  event => {
    event.preventDefault();
    dispatch(addPokemon(input));
  }

  return (
    <div>
      <NavBar />

      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
            <label>Name:</label>
            <input /*className={errors.username && 'danger'}*/
              type='text' name='name' onChange={handleInputChange} value={input.name} placeholder='Name of Pokemon'/>
            {errors.name && (
              <p /*className="danger"*/>{errors.name}</p>
            )}
        </div>

        <div>
            <label>Sprite:</label>
            <input /*className={errors.username && 'danger'}*/
              type='url' name='sprite' onChange={handleInputChange} value={input.sprite} placeholder='Sprite of Pokemon'/>
            {errors.sprite && (
              <p /*className="danger"*/>{errors.sprite}</p>
            )}
        </div>
        
        <div>
            <label>Hp:</label>
            <input /*className={errors.username && 'danger'}*/
              type='number' name='hp' onChange={handleInputChange} value={input.hp} placeholder='Hp of Pokemon'/>
            {errors.hp && (
              <p /*className="danger"*/>{errors.hp}</p>
            )}
        </div>

        <div>
            <label>Attack:</label>
            <input /*className={errors.username && 'danger'}*/
              type='number' name='attack' onChange={handleInputChange} value={input.attack} placeholder='Attack of Pokemon'/>
            {errors.attack && (
              <p /*className="danger"*/>{errors.attack}</p>
            )}
        </div>

        <div>
            <label>Defense:</label>
            <input /*className={errors.username && 'danger'}*/
              type='number' name='defense' onChange={handleInputChange} value={input.defense} placeholder='Defense of Pokemon'/>
            {errors.defense && (
              <p /*className="danger"*/>{errors.defense}</p>
            )}
        </div>

        <div>
            <label>Special Attack:</label>
            <input /*className={errors.username && 'danger'}*/
              type='number' name='special_attack' onChange={handleInputChange} value={input.special_attack} placeholder='Special Attack of Pokemon'/>
            {errors.special_attack && (
              <p /*className="danger"*/>{errors.special_attack}</p>
            )}
        </div>

        <div>
            <label>Special Defense:</label>
            <input /*className={errors.username && 'danger'}*/
              type='number' name='special_defense' onChange={handleInputChange} value={input.special_defense} placeholder='Special Defense of Pokemon'/>
            {errors.special_defense && (
              <p /*className="danger"*/>{errors.special_defense}</p>
            )}
        </div>

        <div>
            <label>Speed:</label>
            <input /*className={errors.username && 'danger'}*/
              type='number' name='speed' onChange={handleInputChange} value={input.speed} placeholder='Speed of Pokemon'/>
            {errors.speed && (
              <p /*className="danger"*/>{errors.speed}</p>
            )}
        </div>

        <button type='submit'> Create </button>
      </form>
    </div>
  )
}