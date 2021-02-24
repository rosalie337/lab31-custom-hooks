/* eslint-disable no-unused-vars */
import React, { useState, createContext, useContext } from 'react';

export const CharacterTheme = createContext(null);

export const NewTheme = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    
    const toggle = () => {
        if (theme === 'dark')setTheme('light');
        else setTheme('dark')
    }
    return (
        <CharacterTheme.Provider value = {{ theme, toggle }}>
            {children}
        </CharacterTheme.Provider>
    );
};


export const useTheme = () => {
    const { theme, toggle } = useContext(CharacterTheme);
    return {
        theme,
        toggle
    }
}

