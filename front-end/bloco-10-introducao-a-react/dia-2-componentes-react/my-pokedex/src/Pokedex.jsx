import React from "react";
import Pokemon from "./Pokemon";

export default class Pokedex extends React.Component {
    render() {
        const { pokemons } = this.props;
        return (
            <div className="pokedex">
            {pokemons.map((pokemon) => <Pokemon key={pokemon.id} user={pokemon}/>)}
            </div>
        )
    };
}