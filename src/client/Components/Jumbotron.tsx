import React from 'react';
import myLogo from './pictures/sbu.jpg';
// import { url } from 'inspector';

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <img src={myLogo} alt="Smash Bros"/>
            </div>
        </div>
    )
};

export default Jumbotron;