import React, {Component} from 'react'

class Exemplo extends Component { // state com classes 

    constructor ()
    {
        super();
        this.state = {
            nome: '',
            idade: 0 , 
        };
    }
    // setState  método que altera o estado

    render()
    {
        return ( // JSX -> ? 
            <div className="ml-24 mt-24">
                <h1>Exemplo Título</h1>
                <h1>{ this.state.nome }</h1>
                <h1>{ this.state.idade }</h1>
                <input
                    placeholder='Digite nome'
                    onChange={ (e) => this.setState({ nome: e.target.value }) }
                />
                <input
                    placeholder='Digite Idade'
                    onChange={ ( e ) => this.setState( { idade: e.target.value }) }
                />
            </div>
        )
    }
}

export default Exemplo;