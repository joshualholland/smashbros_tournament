import * as React from 'react';
import _ from 'lodash';
import json from '../utils/api';
import { array } from 'prop-types';

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

    renderFirstBoxes() {
        return (
            this.state.participants.map((participant) => {
                return (<div className="bg-primary">{participant.username}</div>)
            })
        )
    }

    renderSecondBoxes() {
        let half_part = Math.ceil(this.state.participants.length / 2);
        let conn_arr = [];
        console.log(half_part)
        for (let i = 0; i < half_part; i++) {
            conn_arr.push(<div className="bg-primary"></div>)
        }
        return (conn_arr)
    }

    renderThirdBoxes() {
        let fourth_part = Math.ceil(this.state.participants.length / 4);
        let arr = [];
        for (let i = 0; i < fourth_part; i++) {
            arr.push(<div className="bg-primary"></div>)
        }
        return (arr)
    }

    renderFinal() {
        let final = Math.ceil(this.state.participants.length / 8);
        let final_arr = [];
        for (let i = 0; i <final; i++) {
            final_arr.push(<div className="bg-primary"></div>)
        }
        return (final_arr)
    }

    renderConnector1() {
        let half_part = Math.ceil(this.state.participants.length / 2);
        let conn_arr = [];
        console.log(half_part)
        for (let i = 0; i < half_part; i++) {
            conn_arr.push(<div></div>)
        }
        return (conn_arr)
    };

    renderConnector2() {
        let fourth_part = Math.ceil(this.state.participants.length / 4);
        let conn2_arr = [];
        for (let i = 0; i < fourth_part; i++) {
            conn2_arr.push(<div></div>)
        }
        return (conn2_arr)
    }

    renderConnector3() {
        let final_conn = Math.ceil(this.state.participants.length / 8);
        let conn3_arr = [];
        for (let i = 0; i < final_conn; i++) {
            conn3_arr.push(<div></div>)
        }
        return (conn3_arr)
    }

    render() {
        return (
            <>
                <div className="title mx-auto text-center">
                    <h1>{this.state.tournament.name}</h1>
                </div>
                <div className="section">
                    {this.renderFirstBoxes()}
                </div>
                <div className="connector">
                    {this.renderConnector1()}
                </div>
                <div className="line">
                    {this.renderConnector1()}
                </div>
                <div className="second-rnd">
                    {this.renderSecondBoxes()}
                </div>
                <div className="connector" id="conn2">
                    {this.renderConnector2()}
                </div>
                <div className="line" id="line2">
                    {this.renderConnector2()}
                </div>
                <div className="third-rnd">
                    {this.renderThirdBoxes()}
                </div>
                <div className="connector" id="conn3">
                    {this.renderConnector3()}
                </div>
                <div className="line" id="line3">
                    {this.renderConnector3()}
                </div>
                <div className="final">
                    {this.renderFinal()}
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