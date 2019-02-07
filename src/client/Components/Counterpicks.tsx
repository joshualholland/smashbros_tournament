import * as React from 'react';
import { Link } from 'react-router-dom';
import { json } from '../utils/api';

export default class Counterpicks extends React.Component<ICounterProps, ICounterState> {
    constructor(props: ICounterProps) {
        super(props)
        this.state = {
            stages: []
        }
    }

    async componentWillMount() {
        try {
            let data = await json('/api/counters');
            this.setState({ stages: data });
        } catch (e) { console.log(e) }
    }

    strikeImage(e: any) {
        e.currentTarget.style.filter = 'grayscale(1)';
    }

    renderStages() {
        return (
            this.state.stages.map((stage) => {
                console.log(stage)
                return (
                    <div className="col-md-4" style={{ display: 'inline-block' }}>
                        <img className="stage-img" id={stage.name} src={stage.url} style={{ height: 'auto', maxWidth: 100 + '%', cursor: 'pointer' }} onClick={(e) => this.strikeImage(e)}/>
                        <h4 className="text-primary">{stage.name}</h4>
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <>
                <div className="container mb-5 shadow">
                    <h1 className="text-primary text-center">Counterpick Rules</h1>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="text-secondary">Rules for Counterpicks:</h4>
                            <ul>
                                <li>Loser of starting match gets to pick next stage from approved stages below.</li>
                                <li>Same stages cannot be played in the same set more than once (including the starting stage)</li>
                                <li>For the duration of the set, the loser of the previous match picks the counterstage</li>
                                <li>Begin by striking out the starter stage that was played.</li>
                                <li>Continue by striking out any stages played after that.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="bg-danger"></hr>
                <h1 className="text-primary text-center">Counter Stages</h1>
                <div>
                    {this.renderStages()}
                </div>
                <hr className="bg-danger"></hr>
                <div className='text-center'>
                    <h4 className='text-primary'>Done with set?</h4>
                </div>
                <div className='text-center mb-5'>
                    <Link to='/' className="btn btn-danger">Return Home</Link>
                </div>
            </>
        )
    }
}


interface ICounterProps { };
interface ICounterState {
    stages: {
        id: number,
        name: string,
        url: string
    }[];
};
