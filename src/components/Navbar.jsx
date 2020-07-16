import React from 'react';
import { Link } from 'react-router-dom'
import useDarkMode from '../hooks/useDarkMode'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode('isDarkModeOn?',false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <Link to='/coins'><h1 className='header'>Crypto Tracker</h1></Link>
        
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
   
    </nav>
  );
};

export default Navbar;
