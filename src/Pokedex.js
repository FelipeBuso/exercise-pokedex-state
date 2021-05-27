import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super()
        this.state = {
            position: 0,
            limitArray: (pokemons.length - 1),
        }
        this.changePokemom = this.changePokemom.bind(this);
    }

    changePokemom = () => {
        if (this.state.position < this.state.limitArray) {
            this.setState((actual) => ({
                position: actual.position + 1
            }))
        } else {
            this.setState(() => ({
                position: 0
            }))
        }
    }
    render() {
        const index = this.state.position;
        const { pokemons } = this.props;

        return (
            <div className="pokedex">
                <Pokemon key={pokemons[index].id} pokemon={pokemons[index]} />
                {/* {console.log(this)} */}
                <button onClick={ this.changePokemom }>Rodar</button>
                {console.log(index)};
            </div>
        );
    }
}

export default Pokedex;