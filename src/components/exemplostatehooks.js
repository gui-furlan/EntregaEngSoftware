import React, { useState } from 'react'

const Exemplo = () =>
{
    const [ state, setState ] = useState();
    const [ nome, setNome ] = useState();
    const [ idade, setIdade ] = useState();


    return (
        <div className="ml-24 mt-24">
            <h1 className="mb-2"> Exemplo de state com Hooks</h1>
            <h1 className="mb-2">{ nome }</h1>
            <h1 className="mb-2">{ idade }</h1>

            <input
                placeholder='Digite nome'
                onChange={ (e) => setNome (e.target.value) }
            />
            <input
                placeholder='Digite Idade'
                onChange={ (e) => setIdade (e.target.value) }
            />

            {/* <button
                onClick={ () => setNome( 'Lewis Hamilton' ) }>Alterar Piloto
            </button> */}
        </div>
    )
}

export default Exemplo;