import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/Theme';
import styles from './Header.css'

export default function Header() {
    const { theme, setTheme } = useTheme();

    const handleChange = ({ target }) => {

        if(target.checked){
            setTheme('light');
        } else setTheme('dark');
    };

    const themeStyle = theme === 'dark' ? styles.dark : styles.light;

    return (
        <div className={themeStyle} >

            <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }} >
            <p style={{ textAlign: 'center', fontSize: '35px', margin: '10px' }}>
            Hey Arnold!
            </p>
            </Link>
            <br></br>
            <Link to="/characters">All Characters</Link>
            <br></br>
            <Link to="/">Home</Link>
            <input type="checkbox" onChange={handleChange}></input>
        </div>
    )
}




