import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand text-white">SBU Tournament Utility</a>
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link to='/' className="nav-link text-white">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/players' className="nav-link text-white">Players</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/account' className='nav-link text-white'>Account</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/login' className='nav-link text-white'>Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;