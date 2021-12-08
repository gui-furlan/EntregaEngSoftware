import React from 'react'

//função anônima 
//destructing desestruturar
const Card = ( {monstersProps, number}) =>
{

        
    return (
        <div >
            {
                 monstersProps.map (monster => <h1 key={monster.id}> { monster.name}</h1>)
            }
            <p>{number}</p>
        </div>
    )
}

export default Card;