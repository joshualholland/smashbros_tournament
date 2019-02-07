import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { json } from '../utils/api';

export default class Edit extends React.Component<IEditProps, IEditState> {
    constructor(props: IEditProps) {
        super(props)
        this.state = {
            player: {
                username: '',
            }
        }
    }

    async componentWillMount() {
        try {
            let data = await json(`/api/players/${this.props.match.params.id}`)
            console.log(data)
            this.setState({ player: data })
        } catch (e) {
            console.log(e)
        }
    };

    async handleEdit(e: any) {
        e.preventDefault();
        try {
            await json(`/api/players/${this.props.match.params.id}`, 'PUT', this.state);
            this.props.history.replace('/players');
        } catch (e) { console.log(e) }
    };

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.state.player.username}</h5>
                    <label className="card-text">New Username:</label>
                    <input type="text" placeholder='new username here' className='form-control' value={this.state.player.username} onChange={(e) => this.setState(Object.assign({ ...this.state.player, username: e.target.value }))} />
                    <button type='submit' className="btn btn-secondary" onClick={(e) => this.handleEdit(e)}>Edit Player</button>
                </div>
            </div>
        )
    }
}


interface IEditProps extends RouteComponentProps<{ id: string }> { };

interface IEditState {
    player: {
        username: any
    }
};