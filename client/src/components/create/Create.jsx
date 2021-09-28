import React from 'react';
import { useDispatch } from 'react-redux';
import { addPokemon } from '../../actions/pokemon';
import NavBar from '../navbar/NavBar';
import validate from './utils/validate';
import './Create.css'

const arrTypes = [ 
  'bug', 
  'dark', 
  'dragon', 
  'electric', 
  'fairy', 
  'fighting', 
  'fire', 
  'flying', 
  'ghost', 
  'grass', 
  'ground', 
  'ice', 
  'normal', 
  'poison', 
  'psychic', 
  'rock', 
  'steel', 
  'water'
];

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

  //Funcion para obtener los valores
  const handleInputChange = event => {
    setInput((prev) => ({...prev, [event.target.name]: event.target.value}));

    setErrors(validate({...input, [event.target.name]: event.target.value}));
  }

  //Funcion para agregar el poke
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

  return (
    <div>
      <header>
        <NavBar />
      </header>

      <div className='createBackground'>
        <div className='createDivImg'>
          <img src='https://images.wikidexcdn.net/mwuploads/wikidex/f/f8/latest/20180820010545/Profesor_Oak_LGPE.png' alt='Teacher Oak' className='createImg'/>
        </div>

        <form onSubmit={e => handleSubmit(e)} className='divCreate'>
          <div className='divInputCreate'>
              <div>
                <label className='labelInput'>Name:</label>
                <input 
                type='text' name='name' onChange={handleInputChange} value={input.name} placeholder='Name of Pokemon' className='inputCreate'/>
              </div>
              
              {errors.name && (
                <p className='errorInput'>{errors.name}</p>
              )}
          </div>

          <div className='divInputCreate'>
              <div>
                <label className='labelInput'>Sprite:</label>
                <input
                type='url' name='sprite' onChange={handleInputChange} value={input.sprite} placeholder='Sprite of Pokemon' className='inputCreate'/>
              </div>

              {errors.sprite && (
                <p className='errorInput'>{errors.sprite}</p>
              )}
          </div>
          
          <div className='divInputCreate'>
            <div>
              <label className='labelInput'>Hp:</label>
              <input
              type='number' name='hp' onChange={handleInputChange} value={input.hp} placeholder='Hp of Pokemon' className='inputCreate'/>            
            </div>            
              {errors.hp && (
                <p className='errorInput'>{errors.hp}</p>
              )}
          </div>

          <div className='divInputCreate'>
              <div>
                <label className='labelInput'>Attack:</label>
                <input
                type='number' name='attack' onChange={handleInputChange} value={input.attack} placeholder='Attack of Pokemon' className='inputCreate'/>
              </div>

              {errors.attack && (
                <p className='errorInput'>{errors.attack}</p>
              )}
          </div>

          <div className='divInputCreate'>
              <div>
                <label className='labelInput'>Defense:</label>
                <input
                type='number' name='defense' onChange={handleInputChange} value={input.defense} placeholder='Defense of Pokemon' className='inputCreate'/>
              </div>

              {errors.defense && (
                <p className='errorInput'>{errors.defense}</p>
              )}
          </div>

          <div className='divInputCreate'>
              <div>
                <label className='labelInput'>Special Attack:</label>
                <input
                type='number' name='special_attack' onChange={handleInputChange} value={input.special_attack} placeholder='Special Attack of Pokemon' className='inputCreate'/>
              </div>

              {errors.special_attack && (
                <p className='errorInput'>{errors.special_attack}</p>
              )}
          </div>

          <div className='divInputCreate'>
              <div>
                <label className='labelInput'>Special Defense:</label>
                <input
                type='number' name='special_defense' onChange={handleInputChange} value={input.special_defense} placeholder='Special Defense of Pokemon' className='inputCreate'/>
              </div>

              {errors.special_defense && (
                <p className='errorInput'>{errors.special_defense}</p>
              )}
          </div>

          <div className='divInputCreate'>
              <div>
                <label className='labelInput'>Speed:</label>
                <input
                type='number' name='speed' onChange={handleInputChange} value={input.speed} placeholder='Speed of Pokemon' className='inputCreate'/>
              </div>

              {errors.speed && (
                <p className='errorInput'>{errors.speed}</p>
              )}
          </div>

          <div className='divInputCreate'>
              <div>
                <label className='labelInput'>Height:</label>
                <input
                type='number' name='height' onChange={handleInputChange} value={input.height} placeholder='Height of Pokemon' className='inputCreate'/>
              </div>

              {errors.height && (
                <p className='errorInput'>{errors.height}</p>
              )}
          </div>

          <div className='divInputCreate'>
              <div>
                <label className='labelInput'>Weight:</label>
                <input
                type='number' name='weight' onChange={handleInputChange} value={input.weight} placeholder='Weight of Pokemon' className='inputCreate'/>
              </div>

              {errors.weight && (
                <p className='errorInput'>{errors.weight}</p>
              )}
          </div>

          <div className='divCreateTypes'>
            <select name='type1' onChange={handleInputChange} className='capitalizeText selectType'>
              {arrTypes.map(type => 
                <option value={type} key={type} className='capitalizeText'>{type}</option>
              )}
            </select>

            <select name='type2' onChange={handleInputChange} className='capitalizeText selectType'>
              {arrTypes.map(type => 
                <option value={type} key={type} className='capitalizeText'>{type}</option>
              )}
            </select>
          </div>

          {input.name && (input.type1 || input.type2) && <button type='submit' className='btnCreate'> Create </button>}
        </form>
      </div>
    </div>
  )
}