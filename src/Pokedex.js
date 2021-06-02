import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super()
        this.state = {
            position: 0,
            limitArray: (pokemons.length - 1),
            selectedType: '',
        }
        this.changePokemom = this.changePokemom.bind(this);
        this.handleType = this.handleType.bind(this);
    }

    changePokemom = () => {
        console.log(render.newLimit);
        if (this.state.position < this.newLimit) {
            this.setState((actual) => ({
                position: actual.position + 1
            }))
        } else {
            this.setState(() => ({
                position: 0
            }))
        }
    }

    handleType(event) {
        // console.log(event.target.value)
        this.setState ({
            selectedType: event.target.value,
            // limitArray: this.newLimit,
        })
    }


    render() {
        const index = this.state.position;
        const { pokemons } = this.props;
        const arrayPokemonsFiltered = pokemons.filter((pokemon) => pokemon.type.includes(this.state.selectedType));
        let newLimit = arrayPokemonsFiltered.length
        return (
            <div className="pokedex">
                <Pokemon key={arrayPokemonsFiltered[index].name} pokemon={arrayPokemonsFiltered[index]} />
                <div className="buttons">
                    <button onClick={this.handleType} className="select-type" value=""> All </button>
                    <button onClick={this.handleType} className="select-type" value="Electric"> Electric </button>
                    <button onClick={this.handleType} className="select-type" value="Fire"> Fire </button>
                    <button onClick={this.handleType} className="select-type" value="Bug"> Bug </button>
                    <button onClick={this.handleType} className="select-type" value="Poison"> Poison </button>
                    <button onClick={this.handleType} className="select-type" value="Psychic"> Psychic </button>
                    <button onClick={this.handleType} className="select-type" value="Normal"> Normal </button>
                    <button onClick={this.handleType} className="select-type" value="Dragon"> Dragon </button>
                </div>

               <p> <button onClick={ this.changePokemom }>Rodar</button> </p>
                {/* {console.log(newLimit)}
                {console.log(arrayPokemonsFiltered)} */}
                
            </div>
        );
    }
}

export default Pokedex;