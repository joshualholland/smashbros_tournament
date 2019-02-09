import * as React from 'react';
import { json, User } from '../../utils/api';
import { RouteComponentProps, Link } from 'react-router-dom';

export default class Account extends React.Component<IAccountProps, IAccountState> {
    constructor(props: IAccountProps) {
        super(props)
        this.state = {
            player: {}
        }
    }

    async componentDidMount() {
        if (!User) {
            this.props.history.replace('/login')
        }
        if (User && User.role === 'admin') {
            this.props.history.push('/admin')
        }
        if (User && User.role === 'guest') {
            try {
                let data = await json(`/api/players/${User.userid}`)
                this.setState({ player: data })
            } catch (e) { console.log(e) }
        } 
    };

    render() {
        return (
            <div className="container">
                <h3 className='text-primary'>Welcome {this.state.player.username}!</h3>
                <p className='text-primary'>You are currently a guest. Admins can text and delete players. To become an admin, please contact me at joshualholland@gmail.com</p>
                <hr className='bg-danger'></hr>
                <div>
                    <h5 className='text-primary'>You're avatar:</h5>
                    <img src={this.state.player.avatar} style={{width: 18 + 'rem'}}/>
                </div>
                <p className='text-primary'>Want to edit your player? Click <Link className='text-danger' to='/edit'>Here</Link></p>
            </div>
        )
    }
}

interface IAccountProps extends RouteComponentProps<{ id: string }> { };
interface IAccountState { 
    player: any
};