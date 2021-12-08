import React, { useState } from 'react' // 

export default function Header(props)
{
    const [ nome, setNome ] = useState('Inicio');

    return (
        <div className="bg-yellow-300 h-12">
            <h1>Header da página que estamos desenvolvendo </h1>
            <label>Nome</label>
            <input type="text" placeholder="Nome" required
                onChange={ (e) => setNome(e.target.value) } />
            <button>{ nome }</button>
            <button>{props.nome}</button> 
        </div>
    );
    
}

