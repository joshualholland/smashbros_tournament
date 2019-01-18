import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Edit extends React.Component<IEditProps, IEditState> {
    constructor(props: IEditProps) {
        super(props)
        this.state = {
            username: ''
        }
    }

    async componentWillMount() {
        try {
            let res = await fetch(`/api/players/${this.props.match.params.id}`);
            let data = await res.json();
            console.log(data)
            this.setState({ username: data[0].username })
        } catch (e) {
            console.log(e)
        }
    };

    async handleEdit(e: any) {
        e.preventDefault();
        try {
            await fetch(`/api/players/${this.props.match.params.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
            this.props.history.replace('/players');
        } catch (e) { console.log(e) }
    };

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.state.username}</h5>
                    <label className="card-text">New Username:</label>
                    <input type="text" placeholder='new username here' className='form-control' value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
                    <button type='submit' className="btn btn-secondary" onClick={(e) => this.handleEdit(e)}>Edit Player</button>
                </div>
            </div>
        )
    }
}


interface IEditProps extends RouteComponentProps<{ id: string }> { };

interface IEditState {
    username: string
};