import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { json } from '../../utils/api';

class AllItems extends React.Component<IAllProps, IAllState> {
    constructor(props: IAllProps) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            avatar: '',
            avatars: []
        }
    }

    async handleSubmit(e: any) {
        e.preventDefault();
        let user: any = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            avatar: this.state.avatar
        }
        try {
            await json('/auth/register', 'POST', user);
            this.props.history.push('/login')
        } catch (e) {
            console.log(e)
        }
    };

    async componentDidMount() {
        try {
            let images = await json('/api/avatars');
            this.setState({ avatars: images })
        } catch (e) { console.log(e) }
    }

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
            <main className='container'>
                <section className='row my-3'>
                    <div className="col-md-12">
                        <form className='form-group bg-success rounded shadow-lg' onSubmit={(e) => this.handleSubmit(e)}>
                            <label className='text-primary'>Choose Avatar:</label>
                            <div className='my-auto'>
                                {this.renderAvatars()}
                            </div>
                            <label className='text-primary'>Username</label>
                            <input
                                type='text'
                                className='form-control mb-3'
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ username: e.target.value })} />
                            <label className='text-primary'>Email</label>
                            <input
                                type='email'
                                className='form-control mb-3'
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })} />
                            <label className='text-primary'>Password</label>
                            <input
                                type='password'
                                className='form-control mb-3'
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ password: e.target.value })} />
                            <div className='text-center'>
                                <button type='submit' className='btn btn-danger mb-2'>Register</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        )
    }
}

interface IAllProps extends RouteComponentProps {
}

interface IAllState {
    username: string,
    email: string,
    password: string,
    avatar: string,
    avatars: {
        url: string,
        name: string
    }[]
};






export default AllItems;