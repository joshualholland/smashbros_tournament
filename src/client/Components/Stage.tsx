import * as React from 'react';
// import json from '../utils/api';

export default class Stage extends React.Component<IRPSProps, IRPSState> {
    constructor(props: IRPSProps) {
        super(props)
        this.state = {
            stages: []
        }
    }

    async componentWillMount() {
        try {
            let res = await fetch('/api/stages')
            let data = await res.json();
            let stagesArray = data.map((key: any) => {
                return {
                    id: key.id,
                    name: key.name,
                    url: key.url
                }
            });
            this.setState({ stages: stagesArray })
            console.log(res)

        } catch (e) {
            console.log(e)
        }
    }

    strikeImage() {

    }

    renderStages() {
        return (
            this.state.stages.map((stage) => {
                console.log(stage)
                return (
                    <div className="col-md-4" style={{ display: 'inline-block' }}>
                        <img src={stage.url} style={{ height: 'auto', maxWidth: 100 + '%', cursor: 'pointer' }} />
                        <h4 className="text-primary">{stage.name}</h4>
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <>
                <div className="container mb-5">
                    <h1 className="text-primary text-center">Stage Striking</h1>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="text-secondary">Rules for stage striking:</h4>
                            <ul>
                                <li>Players play a match of rock, paper, scissors to see who strikes first</li>
                                <li>Winner strikes the first stage, marking it out of play.</li>
                                <li>Loser then strikes the next two stages followed by the winner then making the last strike.</li>
                                <li>This leaves one stage remaining for the starting match.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="bg-danger"></hr>
                <h1 className="text-primary text-center">Starter Stages</h1>
                <p className="text-primary text-center">(Strike a stage by clicking it)</p>
                <div>
                    {this.renderStages()}
                </div>
            </>
        )
    }


}

interface IRPSProps { }
interface IRPSState {
    stages: {
        id: number,
        name: string,
        url: string
    }[];
};