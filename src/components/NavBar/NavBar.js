import React from 'react';
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="container">
            <ul>
                <li>
                    <a>Inicio</a>
                </li>

                <li>
                    <a>Productos</a>
                </li>

                <li>
                    <a>Contacto</a>
                </li>
            </ul>

        </nav>

    );
};

export default NavBar;
