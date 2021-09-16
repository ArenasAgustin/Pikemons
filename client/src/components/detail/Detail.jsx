import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getPokemonDetail, removeDetail } from '../../actions/pokemon';

function Detail({ match, pokemonDetail, getPokemonDetail, removeDetail }){
	const [pokemon, setPokemon] = React.useState('');

	useEffect(() => {
		getPokemonDetail(match.params.name);
		return () => { removeDetail() }
	}, [])

	return(
		<div>
      <p>pokemonDetail.name</p>
		</div>
	);
}
      <img/>

function mapStateToProps(state) {
  return {
    pokemonDetail: state.pokemonDetail
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPokemonDetail: poke => dispatch(getPokemonDetail(poke)),
    removeDetail: () => dispatch(removeDetail())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);