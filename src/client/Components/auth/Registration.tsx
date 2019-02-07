import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { json } from '../../utils/api';

class AllItems extends React.Component<IAllProps, IAllState> {
    constructor(props: IAllProps) {
        super(props)
        this.state = {
            username: null,
            email: null,
            password: null
            // avatar: ''
        }
    }

    async handleSubmit(e: any) {
        e.preventDefault();
        try {
            await json('/auth/register', 'POST', this.state);
            this.props.history.push('/login')
        } catch (e) {
            console.log(e)
        }
    };

    render() {
        return (
            <main className='container'>
                    <section className='row my-3'>
                        <div className="col-md-12">
                            <form className='form-group bg-success rounded shadow-lg' onSubmit={(e) => this.handleSubmit(e)}>
                            <label className='text-primary'>Username</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    value={this.state.username}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ username: e.target.value })} />
                                <label className='text-primary'>Email</label>
                                <input
                                    type='email'
                                    className='form-control'
                                    value={this.state.email}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })} />
                                <label className='text-primary'>Password</label>
                                <input
                                    type='password'
                                    className='form-control'
                                    value={this.state.password}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ password: e.target.value })} />
                                <button type='submit' className='btn btn-danger'>Register</button>
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
}






export default AllItems;