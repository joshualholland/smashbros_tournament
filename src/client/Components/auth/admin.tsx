import * as React from 'react';
import { json, User } from '../../utils/api';
import { RouteComponentProps } from 'react-router-dom';

export default class Admin extends React.Component<IAdminProps, IAdminState> {
    constructor(props: IAdminProps) {
        super(props)
        this.state = {
            players: []
        }
    }

    async componentDidMount() {
        if (!User || User.userid === null || User.role !== 'admin') {
            this.props.history.replace('/login');
        } else {
            try {
                let data = await json('/api/players')
                this.setState({ players: data })
            } catch (e) {
                console.log(e)
            }
        }
    };

    async deletePlayer(id: number) {
        try {
            await json(`/api/players/${id}`, 'DELETE');
            this.props.history.replace('/')
        } catch (e) {
            console.log(e)
        }
    }

    renderPlayers() {
        return(
            this.state.players.map((player) => {
                return(
                    <li className='list-group-item active' onClick={(e: any) => this.deletePlayer(player.id)}>{player.username}</li>
                )
            })
        )
    }

    render() {
        return (
           <ul className='list-group'>
                {this.renderPlayers()}
           </ul>
        )
    }
}

interface IAdminProps extends RouteComponentProps {
    id: number
};
interface IAdminState {
    players: any[]
};