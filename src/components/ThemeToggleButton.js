import React, { useContext } from 'react';

import { ThemeContext } from './ThemeProvider';

const ThemeToggleButton = () =>{
      const { theme, toggleTheme } = useContext(ThemeContext);

    return (
    <button
      id="global-theme-toggler"
      className={`btn ${theme === 'light' ? 'btn-light txt-light' : 'btn-dark txt-dark'}`}
      onClick={toggleTheme}
    >
      {theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
    </button>
    )

}
export {ThemeToggleButton}
