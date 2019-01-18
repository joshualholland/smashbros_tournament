import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { json } from 'body-parser';

class AllItems extends React.Component<IAllProps, IAllState> {
    constructor(props: IAllProps) {
        super(props)
        this.state = {
            username: ''
        }
    }

    async handleSubmit(e: any) {
        e.preventDefault();
        try {
            await fetch('/api/players', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
            this.props.history.push('/')
        } catch (e) {
            console.log(e)
        }
    };

    render() {
        return (
            <div className="container-fluid">
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" className="form-control col-10" onChange={(e) => this.setState({ username: e.target.value })} />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary shadow-lg align-self-center" onClick={(e) => this.handleSubmit(e)}>Register</button>
                    </div>
                </form>
            </div>

        )
    }
}

interface IAllProps extends RouteComponentProps {
}

interface IAllState {
    username: string
}






export default AllItems;