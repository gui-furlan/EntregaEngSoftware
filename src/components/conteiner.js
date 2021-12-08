import React from 'react'
import CompHook from'./component-hook'

const Conteiner = () =>
{
    const users = "John";
    const lastName = "Doe";

 // propriedades ... 
    return (
        <div>
            <h1>Conteiner</h1>
            <CompHook user={ users } lastName={ lastName}/>
        </div>
    );
    
}

export default Conteiner;