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
            console.log(res)
            this.setState({ tournament: res.tournament })
        } catch (e) {
            console.log(e)
        }
    }

    async componentDidMount() {
        try {
            let res = await json('/api/players')
            let playerArray = res.map((key: any) => {
                return {
                    username: key.username
                }
            })
            console.log(playerArray)
            this.setState({ participants: playerArray })
        } catch (e) {
            console.log(e)
        }
    };

    renderBoxes() {
        return (
            this.state.participants.map((participant) => {
                return (
                    <>
                        <div className="name-box bg-primary m-3">
                            <input className="bg-primary" placeholder={participant.username} type="text" />
                        </div>
                    </>
                )
            })
        )
    }

    render() {
        return (
            <>
                <div className="title mx-auto text-center">
                    <h1>{this.state.tournament.name}</h1>
                </div>
                <div className="single-match m-5">
                    {this.renderBoxes()}
                </div>
                {/* <div className="name-box bg-primary m-3">
                        <input className="bg-primary" placeholder={this.state.participants[0]} type="text" />
                        <div className="bracket-line"></div>
                    </div>
                    <div className="name-box bg-primary m-3">
                        <input className="bg-primary" type="text" placeholder={this.state.participants[1]} />
                    </div>
                </div>
                <div className="single-match m-5">
                    <div className="name-box bg-primary m-3">
                        <input className="bg-primary" placeholder={this.state.participants[2]} type="text" />
                        <div className="bracket-line"></div>
                    </div>
                    <div className="name-box bg-primary m-3">
                        <input className="bg-primary" type="text" placeholder={this.state.participants[3]} />
                    </div>
                </div> */}
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