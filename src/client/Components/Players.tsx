import * as React from 'react';
import { Link } from 'react-router-dom';

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
            let res = await fetch('/api/players')
            let data = await res.json();
            let playerArray = data.map((key: any) => {
                return {
                    id: key.id,
                    username: key.username
                }
            })
            this.setState({ players: playerArray })
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



