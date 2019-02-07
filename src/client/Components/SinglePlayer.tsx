import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { json } from '../utils/api';

export default class SinglePlayer extends React.Component<ISingleProps, ISingleState> {
    constructor(props: ISingleProps) {
        super(props)
        this.state = {
            player: {}
        }
    }

    async componentWillMount() {
        try {
            let data = await json(`/api/players/${this.props.match.params.id}`);
            this.setState({ player: data[0] });
        } catch (e) {
            console.log(e)
        }
    };

    render() {
        return (
            <div className="card" style={{ width: '18' + 'rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{this.state.player.username}</h5>
                    <p className="card-text">Possible Win Loss Ratio here</p>
                    <Link to={`/edit/${this.props.match.params.id}`} style={{ float: 'left' }} className="btn btn-secondary mr-2">Edit Player</Link>
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