import * as React from 'react';

export default class SMSform extends React.Component<ISMSProps, ISMSState> {
    constructor(props: ISMSProps) {
        super(props)
        this.state = {
            message: {
                to: '',
                body: ''
            },
            submitting: false,
            error: false
        }
    }

    render() {
        return (
            <>
                <form>
                    <div>
                        <label htmlFor="to">To:</label>
                        <input
                            type="tel"
                            name="to"
                            id="to"
                        />
                    </div>
                    <div>
                        <label htmlFor="body">Body:</label>
                        <textarea name="body" id="body" />
                    </div>
                    <button type="submit">Send message</button>
                </form>
            </>
        )
    }
}

interface ISMSProps { };
interface ISMSState {
    message: {
        to: string,
        body: string
    },
    submitting: boolean,
    error: boolean
};