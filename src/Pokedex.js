import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super()
        this.state = {
            position: 0,
            limitArray: pokemons.length,
        }
        this.changePokemom = this.changePokemom.bind(this);
    }

    changePokemom = () => {
        this.setState((actual) => ({
            position: actual.position + 1
        }))
    }
    render() {
        const index = this.state.position;

        return (
            <div className="pokedex">
                <Pokemon key={this.props.pokemons[index].id} pokemon={this.props.pokemons[index]} />
                {/* {console.log(this)} */}
                <button onClick={ this.changePokemom }>Rodar</button>
            </div>
        );
    }
}

export default Pokedex;