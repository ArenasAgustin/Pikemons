// export const urlEspresion = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

export default function validate(input) {
  let errors = {};
  if(!input.name){
    errors.name = 'Username is required';
  }

  if(input.hp > 255){
    errors.hp = 'Hp less than 255';
  } 

  if(input.attack > 255){
    errors.attack = 'Attack less than 255';
  } 

  if(input.defense > 255){
    errors.defense = 'Defense less than 255';
  } 

  if(input.special_attack > 255){
    errors.special_attack = 'Special Attack less than 255';
  } 

  if(input.special_defense > 255){
    errors.special_defense = 'Special Defense less than 255';
  } 

  if(input.speed > 255){
    errors.speed = 'Speed less than 255';
  } 

  // if(!urlEspresion.test(input.sprite)){
  //   errors.types = 'Minimum one type';
  // }  

  return errors;
};

