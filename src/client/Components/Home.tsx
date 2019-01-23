import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Bracket from './Bracket';
import json from '../utils/api';


// import TournamentBracket from './Bracket';

export default class Home extends React.Component<IHomeProps, IHomeState> {
    constructor(props: IHomeProps) {
        super(props)
        this.state = {
            players: [],
            tournament: {
                name: '',
                url: '',
            }
        }
    }

    async componentWillMount() {
        try {
            let res = await fetch('/api/players');
            let data = await res.json();
            let playerArray = data.map((key: any) => {
                return {
                    id: key.id,
                    username: key.username
                }
            });
            this.setState({ players: playerArray })
        } catch (e) { console.log(e) }
    }

    returnPlayers() {
        return (
            this.state.players.map((player) => {
                console.log(player)
                return (
                    <li className="list-group-item list-group-item-action">{player.username}
                        <button type="button" className="btn btn-danger btn-sm float-right">X</button>
                    </li>
                )
            })
        )
    }

    async generateTournament() {
        try {
            await fetch('/api/challonge/tournaments/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.tournament)
            })
        } catch (e) {
            console.log(e)
        }
    };

    render() {
        return (
            <>
                <div className="wrapper">
                    <div className="participants col-10 mx-auto bg-primary m-5">
                        <div className="container">
                            <div className="header">
                                <h2 className="display-4">Players:</h2>
                            </div>
                            <div className='playerlist'>
                                <ul className="list-group">
                                    <span>Choose Players:</span>
                                    {this.returnPlayers()}
                                </ul>
                            </div>
                            <div className="button particpants-buttons mt-2">
                                <Link to='/register' className="btn btn-secondary mr-3">Add Player</Link>
                            </div>
                        </div>
                    </div>
                    <div className="tourn-info col-10 mx-auto bg-primary">
                        <div className="container">
                            <div className="header">
                                <h4 className="display-4">Tournament Name:</h4>
                                <input type="text" className='input-group' onChange={(e) => this.setState({ tournament: { name: e.target.value, url: e.target.value }})}/>
                                <small className='form-text text-muted'>No spaces or special characters</small>
                            </div>
                        </div>
                    </div>
                    <div className="generate-btn mt-5">
                        <Link to='/bracket' className="btn text-white" style={{ backgroundColor: '#C000CC', marginLeft: 10 + '%' }}>Generate</Link>
                    </div>
                </div>
            </>
        )
    }
};

interface IHomeProps extends RouteComponentProps {

};

interface IHomeState {
    players: {
        id: number,
        username: string
    }[];
    tournament: {
        name: string,
        url: string
    }
}