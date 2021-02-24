import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/Theme';
import styles from './Header.css'

export default function Header() {
    const { theme, toggle } = useTheme()

    console.log(theme);

    // const handleChange = ({ target }) => {

    //     if(target.checked){
    //         setTheme('dark');
    //     } else setTheme('light');
    // };

    // const themeStyle = theme => 'dark' ? styles.dark : styles.light;

    return (
        <div className={`${styles[theme]}`} >
            <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }} >
            <p style={{ textAlign: 'center', fontSize: '35px', margin: '10px' }}>
            Hey Arnold!
            </p>
            </Link>
            <br></br>
            <Link to="/characters">All Characters</Link>
            <br></br>
            <Link to="/">Home</Link>
            <input type="checkbox" onChange={toggle}></input>
        </div>
    )
}




