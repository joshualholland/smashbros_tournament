import * as React from 'react';
import { json, User } from '../../utils/api';
import { RouteComponentProps, Link } from 'react-router-dom';

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

    renderPlayersDelete() {
        return (
            this.state.players.map((player) => {
                return (
                    <div className="card m-3" style={{ width: 10 + 'rem', display: 'inline-block' }}>
                        <img className='card-img-top' src={player.avatar} alt='avatar' />
                        <div className="card-body text-center p-1">
                            <h5 className="card-title">{player.username}</h5>
                        </div>
                        <div className='text-center'>
                            <button className="btn btn-danger" onClick={() => this.deletePlayer(player.id)}>Delete</button>
                        </div>
                    </div>
                )
            })
        )
    }

    renderPlayersMessage() {
        return (
            this.state.players.map((player) => {
                return (
                    <div className="card m-3" style={{ width: 10 + 'rem', display: 'inline-block' }}>
                        <img src={player.avatar} className="card-img-top" alt="avatar" />
                        <div className="card-body text-center p-1">
                            <h5 className="card-title">{player.username}</h5>
                            <p className="card-text">Hit the button to form an sms message!</p>
                            <Link to='/sms' className='btn btn-danger'>Contact Me!</Link>
                        </div>
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <>
                <h3 className='text-primary'>Welcome to Admin Page!</h3>
                <p className='text-primary'>Congrats on running your Smash Bros Tournament and thanks for using my utility!</p>
                <hr className='bg-danger'></hr>
                <h4 className='text-primary'>Below you can delete players</h4>
                <div>
                    {this.renderPlayersDelete()}
                </div>
                <hr className='bg-danger'></hr>
                <h4 className='text-primary'>Choose players to text below when it is their time to get to the Tournament area!</h4>
                <div>
                    {this.renderPlayersMessage()}
                </div>
            </>
        )
    }
}

interface IAdminProps extends RouteComponentProps {
    id: number
};
interface IAdminState {
    players: any[]
};