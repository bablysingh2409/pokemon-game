import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWin) {
      title = <h1 className="Pokedex-win">WINNER</h1>;
    } else {
      title = <h1 className="Pokedex-loose">LOOSE</h1>;
    }
    return (
      <div>
        {title}
        <h4>your total exp is :: {this.props.exp}</h4>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;