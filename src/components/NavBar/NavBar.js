import React from 'react';
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="container">
            <ul>
                <li>
                    <a href='https://www.google.com/'>Inicio</a>
                </li>

                <li>
                    <a href='https://www.google.com/'>Productos</a>
                </li>

                <li>
                    <a href='https://www.google.com/'>Contacto</a>
                </li>
            </ul>

        </nav>

    );
};

export default NavBar;
