import React from 'react';
import { useDispatch } from 'react-redux';
import { addPokemon } from '../../actions/pokemon';
import NavBar from '../navbar/NavBar';
import validate from './utils/validate';
import './Create.css'

const arrTypes = [ 'bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water'];

export default function  Create() {
  const dispatch = useDispatch();
  const [input, setInput] = React.useState({
    name: '',
    hp: '',
    attack: '',
    defense: '',
    special_attack: '',
    special_defense: '',
    speed: '',
    weight: '',
    height: '',
    type1: '',
    type2: '',
    sprite: ''
  })
  const [errors, setErrors] = React.useState({});

  const handleInputChange = event => {
    setInput((prev) => ({...prev, [event.target.name]: event.target.value}));

    setErrors(validate({...input, [event.target.name]: event.target.value}));
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPokemon(input));
    setInput({
    name: '',
    hp: '',
    attack: '',
    defense: '',
    special_attack: '',
    special_defense: '',
    speed: '',
    weight: '',
    height: '',
    type1: '',
    type2: '',
    sprite: ''
  })
  }
  /*className={errors.username && 'danger'}*/
  /*className="danger"*/

  return (
    <div>
      <header>
        <NavBar />
      </header>

      <div className='createBackground'>
        <div className='createDivImg'>
          <img src='' alt='Teacher Oak' className='createImg'/>
        </div>

        <form onSubmit={e => handleSubmit(e)} className='divCreate'>
          <div>
              <label>Name:</label>
              <input 
                type='text' name='name' onChange={handleInputChange} value={input.name} placeholder='Name of Pokemon' className='inputCreate'/>
              {errors.name && (
                <p>{errors.name}</p>
              )}
          </div>

          <div>
              <label>Sprite:</label>
              <input
                type='url' name='sprite' onChange={handleInputChange} value={input.sprite} placeholder='Sprite of Pokemon' className='inputCreate'/>
              {errors.sprite && (
                <p>{errors.sprite}</p>
              )}
          </div>
          
          <div>
              <label>Hp:</label>
              <input
                type='number' name='hp' onChange={handleInputChange} value={input.hp} placeholder='Hp of Pokemon' className='inputCreate'/>
              {errors.hp && (
                <p>{errors.hp}</p>
              )}
          </div>

          <div>
              <label>Attack:</label>
              <input
                type='number' name='attack' onChange={handleInputChange} value={input.attack} placeholder='Attack of Pokemon' className='inputCreate'/>
              {errors.attack && (
                <p>{errors.attack}</p>
              )}
          </div>

          <div>
              <label>Defense:</label>
              <input
                type='number' name='defense' onChange={handleInputChange} value={input.defense} placeholder='Defense of Pokemon' className='inputCreate'/>
              {errors.defense && (
                <p>{errors.defense}</p>
              )}
          </div>

          <div>
              <label>Special Attack:</label>
              <input
                type='number' name='special_attack' onChange={handleInputChange} value={input.special_attack} placeholder='Special Attack of Pokemon' className='inputCreate'/>
              {errors.special_attack && (
                <p>{errors.special_attack}</p>
              )}
          </div>

          <div>
              <label>Special Defense:</label>
              <input
                type='number' name='special_defense' onChange={handleInputChange} value={input.special_defense} placeholder='Special Defense of Pokemon' className='inputCreate'/>
              {errors.special_defense && (
                <p>{errors.special_defense}</p>
              )}
          </div>

          <div>
              <label>Speed:</label>
              <input
                type='number' name='speed' onChange={handleInputChange} value={input.speed} placeholder='Speed of Pokemon' className='inputCreate'/>
              {errors.speed && (
                <p>{errors.speed}</p>
              )}
          </div>

          <div>
              <label>Height:</label>
              <input
                type='number' name='height' onChange={handleInputChange} value={input.height} placeholder='Height of Pokemon' className='inputCreate'/>
              {errors.height && (
                <p>{errors.height}</p>
              )}
          </div>

          <div>
              <label>Weight:</label>
              <input
                type='number' name='weight' onChange={handleInputChange} value={input.weight} placeholder='Weight of Pokemon' className='inputCreate'/>
              {errors.weight && (
                <p>{errors.weight}</p>
              )}
          </div>

          <div className='divCreateTypes'>
            <select name='type1' onChange={handleInputChange} className='capitalizeText'>
              {arrTypes.map(type => 
                <option value={type} key={type}>{type}</option>
              )}
            </select>

            <select name='type2' onChange={handleInputChange} className='capitalizeText'>
              {arrTypes.map(type => 
                <option value={type} key={type}>{type}</option>
              )}
            </select>
          </div>

          {input.name && (input.type1 || input.type2) && <button type='submit'> Create </button>}
        </form>
      </div>
    </div>
  )
}