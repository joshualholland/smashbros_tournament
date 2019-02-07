import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { json, SetAccessToken } from '../../utils/api';

export default class Login extends React.Component<ILoginProps, ILoginState> {
    constructor(props: ILoginProps) {
        super(props)
        this.state = {
            email: null,
            password: null
        }
    }

    async login(e: any) {
        e.preventDefault();
        let user: { email: string, password: string } = {
            email: this.state.email,
            password: this.state.password
        };
        try {
            let result = await json('/auth/login', 'POST', user)
            
            if(result) {
                SetAccessToken(result.token, { userid: result.userid, role: result.role });
                if (result.role === 'admin') {
                    this.props.history.push('/admin')
                } else {
                    this.props.history.push('/')
                }
            } else {
               
            }
        } catch (e) { throw e }
    }

    render() {
        return (
            <>
                <main className='container'>
                    <section className='row my-3'>
                        <div className="col-md-12">
                            <form className='form-group bg-success rounded shadow-lg' onSubmit={(e) => this.login(e)}>
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
                                <button type='submit' className='btn btn-danger'>Login</button>
                            </form>
                            <Link to='/register' className='text-primary'>Not a registered player? Register Here!</Link>
                        </div>
                    </section>
                </main>
            </>
        )
    }
}

interface ILoginProps extends RouteComponentProps { };
interface ILoginState {
    email: string,
    password: string
};

