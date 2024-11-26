import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <Link to="/ejercicio1" style={styles.navLink}>Ejercicio 1</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/ejercicio2" style={styles.navLink}>Ejercicio 2</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/ejercicio3" style={styles.navLink}>Ejercicio 3</Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        padding: 0,
    },
    navItem: {
        margin: '0 10px',
    },
    navLink: {
        textDecoration: 'none',
        fontSize: '18px',
        color: '#000',
        padding: '10px 20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        transition: 'background-color 0.3s',
    },
};

export default Navbar;
