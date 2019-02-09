import * as React from 'react';
import { json } from '../../utils/api';

export default class SMSform extends React.Component<ISMSProps, ISMSState> {
    constructor(props: ISMSProps) {
        super(props)
        this.state = {
            to: null,
            body: null
        }
    }
    private submitting: boolean = false;
    private error: boolean = false;

    async handleSubmit(e: any) {
        e.preventDefault();

        if (this.submitting || this.error) return;

        try {
            this.submitting = true
            console.log(this.state)
            let data = await json('/sms/message', 'POST', this.state);
            if (data) {
                this.submitting = false;
                this.error = false;
            }
        } catch (e) {
            console.log(e)
            this.error = true
        }

    }

    render() {
        return (
            <>
                <main className='container text-center bg-secondary'>
                    <section className='row my-3'>
                        <div className='col-md-12'>
                            <form onSubmit={(e) => this.handleSubmit(e)}>
                                <div>
                                    <label className='text-danger' htmlFor="to">To:</label>
                                    <input
                                        className='form-control mb-3'
                                        type="tel"
                                        name="to"
                                        id="to"
                                        onChange={(e) => this.setState({ to: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className='text-danger' htmlFor="body">Body:</label>
                                    <textarea
                                        className='form-control mb-3'
                                        name="body"
                                        id="body"
                                        onChange={(e) => this.setState({ body: e.target.value })} />
                                </div>
                                <button className='btn btn-danger' type="submit">Send message</button>
                            </form>
                        </div>
                    </section>
                </main>
            </>
        )
    }
}

interface ISMSProps { };
interface ISMSState {
    to: any,
    body: string
};