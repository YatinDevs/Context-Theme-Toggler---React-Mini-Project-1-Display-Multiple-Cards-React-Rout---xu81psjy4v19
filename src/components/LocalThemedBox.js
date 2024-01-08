import React from 'react';
import { ThemeContext } from './ThemeProvider';


const LocalThemedBox = () => {
  const { theme , toggleTheme } = useContext(ThemeContext);

return(
    <div style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box">
        {/* Write code below this line */}
         <p id="local-themed-text-container" className={`txt-${theme}`}>
        Some Text
      </p>
      <button
        id="local-theme-toggler"
        className={`btn-${theme} btn`}
        onClick={toggletheme}
      >
        {theme === 'light' ? 'Toggle local theme to dark' : 'Toggle local theme to light'}
      </button>
    </div>
)
}

export { LocalThemedBox }
