import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { any } from 'prop-types';

export default class SinglePlayer extends React.Component<ISingleProps, ISingleState> {
    constructor(props: ISingleProps) {
        super(props)
        this.state = {
            player: {}
        }
    }

    async componentWillMount() {
        try {
            let res = await fetch(`/api/players/${this.props.match.params.id}`)
            let player = await res.json();
            this.setState({ player: player[0] })
        } catch (e) {
            console.log(e)
        }
        console.log(this.state.player)
    };

    async deletePlayer() {
        try {
            await fetch(`/api/players/${this.props.match.params.id}`, {
                method: 'DELETE'
            });
            this.props.history.replace('/')
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div className="card" style={{ width: '18' + 'rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{this.state.player.username}</h5>
                    <p className="card-text">Possible Win Loss Ratio here</p>
                    <Link to={`/edit/${this.props.match.params.id}`} style={{ float: 'left' }} className="btn btn-secondary mr-2">Edit Player</Link>
                    <button className='btn btn-secondary' style={{ float: 'left' }} onClick={() => this.deletePlayer()}>Delete</button>
                </div>
            </div>
        )
    }


}

interface ISingleProps extends RouteComponentProps<{ id: string }> {
};

interface ISingleState {
    player: any
};