import useLocalStorage from './useLocalStorage';
import React, {useState, useEffect} from 'react';


const useDarkMode = (initialValue) => {
   const [darkMode, setDarkMode] = useLocalStorage('isDarkModeOn?', initialValue);
    const body = document.querySelector('body');
    useEffect(()=> {
        return darkMode ? body.classList.add('dark-mode'): body.classList.remove('dark-mode');
    }, [darkMode]);

    return [darkMode, setDarkMode];
}

export default useDarkMode;