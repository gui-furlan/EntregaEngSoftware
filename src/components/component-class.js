import React, { Component } from 'react'


class ComponentClass extends Component{

    constructor ( )
    {
        super();
        this.state = {
            nome: "Eduardo Ferreira"
        }
    }

    // setState
    
    render() // dentro do método está todo código html + js que será renderizado
    {
        return (
            <div> <h1>Component Class</h1></div>
        );
    }
}

export default ComponentClass;