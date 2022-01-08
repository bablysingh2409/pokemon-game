import React, { Component } from 'react';
import Pokedex from './Pokedex';
import './Pokecard.css';
let img = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
class Pokecard extends Component {
  render() {
    let allImg = `${img}${padToThree(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-text">{this.props.name}</h1>
        <div className="Pokecard-img">
          <img src={allImg} alt="" />
        </div>
        <div className="Pokecard-data">{this.props.type}</div>
        <div className="Pokecard-data">{this.props.exp}</div>
      </div>
    );
  }
}
export default Pokecard;
