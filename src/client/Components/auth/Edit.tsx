import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { json, User } from '../../utils/api';

export default class Edit extends React.Component<IEditProps, IEditState> {
    constructor(props: IEditProps) {
        super(props)
        this.state = {
            username: '',
            email: '',
            avatar: '',
            avatars: []
        }
    }

    async componentWillMount() {
        try {
            let playerData = await json(`/api/players/${User.userid}`)
            this.setState({ username: playerData.username, email: playerData.email, avatar: playerData.avatar })

            let avatarData = await json(`/api/avatars`)
            this.setState({ avatars: avatarData })
        } catch (e) {
            console.log(e)
        }
    };

    async handleEdit(e: any) {
        e.preventDefault();
        let player: any = {
            username: this.state.username,
            email: this.state.email,
            avatar: this.state.avatar
        }
        try {
            await json(`/api/players/${User.userid}`, 'PUT', player);
            this.props.history.replace('/players');
        } catch (e) { console.log(e) }
    };

    renderAvatars() {
        return (
            this.state.avatars.map((avatar) => {
                return (
                    <div className='card'
                        onClick={() => this.setState({ avatar: avatar.url })}
                        style={{
                            width: 10 + 'rem',
                            display: 'inline-block',
                            height: 10 + 'rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden'
                        }}>
                        <img src={avatar.url} className='card-img-top' alt={avatar.name}></img>
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <>
                <div className="container">
                    <div>
                        <h5 className='text-primary'>Select new Avatar!</h5>
                        {this.renderAvatars()}
                    </div>
                    <div>
                        <h5 className='text-primary'>New Username:</h5>
                        <input className='form-control' type='text' value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })}/>
                        <h5 className='text-primary'>New email:</h5>
                        <input className='form-control' type='text' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value})} />
                    </div>
                    <button className='btn btn-danger' onClick={(e) => this.handleEdit(e)}>Update Player</button>
                </div>
            </>
        )
    }
}


interface IEditProps extends RouteComponentProps<{ id: string }> { };

interface IEditState {
    username: string,
    email: string,
    avatar: string,
    avatars: {
        url: string,
        name: string
    }[]
};