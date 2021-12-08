import React, { useState} from 'react'

const ComponentHook = (props) => {

    const [ nome, setNome ] = useState( "Click" );
    const [ titulo, setTitulo ] = useState("Caçadas de vida ou morte");

    // renderizado
    return (
        <div>
            <h1>Component com Hooks ...</h1>
            <button
                className="bg-green-400 px-4 py-4"
                onClick={ ()=> setNome("Cliked")}
            > { nome } </button>
            <p> { titulo }</p>
            <button className="px-4 py-4 bg-yellow-400">
                { props.user }
                {props.lastName}        
            </button>
        </div>
    )
}

export default ComponentHook;