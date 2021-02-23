import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }} >
            <p style={{ textAlign: 'center', fontSize: '35px', margin: '10px' }}>
            Hey Arnold!
            </p>
        </Link>
    )
}




