import * as React from 'react';
import { Link } from 'react-router-dom';
import { json } from '../utils/api';

import PlayerCard from './PlayerCard';
import { number, any } from 'prop-types';

export default class Current extends React.Component<ICurrentProps, ICurrentState> {
    constructor(props: ICurrentProps) {
        super(props)
        this.state = {
            players: []
        }
    }

    async componentWillMount() {
        try {
            let data = await json('/api/players');
            this.setState({ players: data });
        } catch (e) {
            console.log(e)
        }
    };

    returnPlayers() {
        return (
            this.state.players.map((player) => {
                console.log(player)
                return (
                    <PlayerCard player={player} key={player.id} />
                )
            })
        )
    }

    render() {
        return (
            <div className="container">
                {this.returnPlayers()}
            </div>
        )
    }
};

interface ICurrentProps { };

interface ICurrentState {
    players: {
        id: number,
        username: string
    }[];
};



