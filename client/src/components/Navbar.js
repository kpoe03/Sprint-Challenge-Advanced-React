import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode';


const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode('darkMode', false);
    const toggle = e => {
        e.preventDefault();
        setDarkMode(!darkMode)
    };
    return(
        <nav className='navbar'>
            <h1>Women's World Cup Player Search Trends</h1>
            <div className='dark-mode__toggle'>
                <button
                    onClick={toggle}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                >Dark Mode</button>
            </div>
            {darkMode && <p>Dark mode on!</p>}
        </nav>
    )
}
export default Navbar;