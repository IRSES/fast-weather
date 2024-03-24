import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <img alt='header-icon' className='logo-site-icon' src='./icons-for-header/site-icon.png'></img>
            <nav className="nav">
                <a href="/" className="site-title">Fast Weather</a>
                <ul>
                    <li className='active'>
                        <a href="/marks">Home</a>
                    </li>
                    <li className='active'>
                        <a href="/marks">Marks</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;