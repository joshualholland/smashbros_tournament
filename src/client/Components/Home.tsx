import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <h1 className="home-head text-primary">Welcome to Smash Bros. Tournament Utility!</h1>
            <h4 className="home-text text-primary">The Tournament Operator's best assistant</h4>
            <div className="text-center">
                <Link to='/stage' className="btn btn-danger home-button">Get Started!</Link>
            </div>
        </>
    )
}

export default Home;



