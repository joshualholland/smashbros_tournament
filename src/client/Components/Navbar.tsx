import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container-fluid">
                <a className="navbar-brand text-white">Smash Bros Ultimate Tournament Utility</a>
                <div className="navbar-nav ml-auto" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to='/' className="nav-link mr-sm-2 text-white" href="#">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/login' className='nav-link mr-sm-0 text-white'>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/players' className="nav-link mr-sm-0 text-white" href="#">Players</Link>
                            </li>
                        </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;