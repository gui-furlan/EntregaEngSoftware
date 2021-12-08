
import React,{Component} from 'react'

class User extends Component
{
    constructor ()
    {
        super();
        this.state = {
            users:[{}]
        }

    }

    componentDidMount()
    {
        fetch( 'https://jsonplaceholder.typicode.com/users' )
            .then( response => response.json() )
            .then( res => this.setState( { users: res }))
    }
    
    render()
    {
        return (
            <div>
                <p>User</p>
                { this.state.users.map(user => <p>{user.name}</p>)}
            </div>
        )

    }


}

export default User;