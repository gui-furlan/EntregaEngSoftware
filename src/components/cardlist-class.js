import React, {Component} from 'react'


class Card extends Component {

    constructor ()
    {
        super();
        this.state = {
            monsters: [
                {
                    name: 'Frankstein',
                    id: '1'
                },
                {
                    name: 'Dracula',
                    id: '2'
                },
                {
                    name: 'Zombie',
                    id : '3'
                }
            ]
        }

    }
    render()
    {
        return (
            <div>
                <h1> Monster</h1>
                { //JSX 
                    this.state.monsters.map( monster => <h1 key={monster.id}>{ monster.name }</h1>)
                }
            </div>
        )
    }

}

export default Card;