import * as React from 'react';
import _ from 'lodash';
import json from '../utils/api';

export default class Bracket extends React.Component<ITournamentProps, ITournamentState> {
    constructor(props: ITournamentProps) {
        super(props)
        this.state = {
            participants: [],
            tournament: {
                id: '',
                name: '',
            }

        }
    }

    async componentWillMount() {
        try {
            let res = await json('/api/challonge/tournaments')
            this.setState({ tournament: res.tournament })
        } catch (e) {
            console.log(e)
        }
    }

    async componentDidMount() {
        try {
            let res = await json('/api/players')
            let playerArray = res.map((key: any) => {
                return { username: key.username }
            })
            this.setState({ participants: playerArray })
        } catch (e) {
            console.log(e)
        }
    };

    renderBoxes() {
        return (
            this.state.participants.map((participant) => {
                return (<div className="bg-primary">{participant.username}</div>)
            })
        )
    }

    renderConnector() {
        let half_part = Math.ceil(this.state.participants.length / 2);
        let conn_arr = [];
        console.log(half_part)
        for (let i = 0; i < half_part; i++) {
            conn_arr.push(<div></div>)
        }
        return (conn_arr)
    };

    render() {
        return (
            <>
                <div className="title mx-auto text-center">
                    <h1>{this.state.tournament.name}</h1>
                </div>
                <div className="section">
                    {this.renderBoxes()}
                </div>
                <div className="connector">
                    {this.renderConnector()}
                </div>
                <div className="line">
                    {this.renderConnector()}
                </div>
                <div className="second-rnd">
                    {this.renderConnector()}
                </div>
            </>
        )
    }
};

interface ITournamentProps {
};

interface ITournamentState {
    participants: {
        username: string
    }[];
    tournament: {
        id: string,
        name: string
    }
};