import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css'
// import pokemons from './data';

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0,
            limitArray: (props.pokemons.length - 1),
            selectedType: '',
            arrayPokemon: props.pokemons,
            disableButton: false,
        }
        this.changePokemom = this.changePokemom.bind(this);
        this.handleType = this.handleType.bind(this);
        this.filterPokemonsType = this.filterPokemonsType.bind(this);
        this.changePokemom = this.changePokemom.bind(this);
        this.disableButton = this.disableButton.bind(this);
    }

    changePokemom(){
        const { position, limitArray } = this.state;
        position < limitArray ? this.setState({ position: position + 1}) : this.setState({ position: 0});
    }

    filterPokemonsType(type) {
        // const { selectedType } = this.state;
        const { pokemons } = this.props;
        // const actualArrayPokemons = pokemons;
        const filteredArray = pokemons.filter((pokemon) => pokemon.type.includes(type));
        this.setState({
            arrayPokemon: [...filteredArray],
            limitArray: filteredArray.length -1,
        })
        this.disableButton(filteredArray)
        console.log(filteredArray);
        console.log(pokemons);
    }

    disableButton(array) {
        array.length === 1 ? this.setState({ disableButton: true }): this.setState({ disableButton: false });
    }

    handleType({target}) {
        this.setState ({
            selectedType: target.value,
        })
        this.filterPokemonsType(target.value);
    }


    render() {
        // const { pokemons } = this.props;
        const { arrayPokemon, position, disableButton } = this.state;
        return (
            <div className="pokedex">
                <div className="pokedex-section">
                    <Pokemon key={arrayPokemon[position].name} pokemon={arrayPokemon[position]} />
                </div>
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
                <div className="button-change-pokemon">
                    <button className="change-pokemon" disabled={ disableButton } onClick={ this.changePokemom }>Próximo Pokemon</button>
                </div>
               
            </div>
        );
    }
}

export default Pokedex;