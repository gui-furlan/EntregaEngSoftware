import React, { Component } from 'react'

class Sidebar extends Component{
    
    constructor ()
    {
        super();
        this.state = {
            nome: 'Hello Eduardo Ferreira'
        };
    }


    
 
    render(){ //  método obrigatório
     // quando o componente for renderizado,
       
         
        return (//é esse código do return que será exibido
            <div className="h-48 w-32 bg-green-200"> 
                <h1>Sidebar</h1>
                <p>{ this.state.nome }</p>
                <button
                    onClick={ () => this.setState( { nome: 'Boa tarde galera!' } ) }>
                    Atualizar Nome
                </button>
            </div>
        )
    }
}

export default Sidebar; // obrigatório