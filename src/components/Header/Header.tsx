import React from 'react';
import './Header.css';
import logo from '../../assets/images/exalt-logo.svg';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-inner">
                <img src={logo} alt="exalt logo"/>
                <button>Schedule a call</button>
            </div>
        </header>
    );
};

export default Header;
