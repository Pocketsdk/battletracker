import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Display">Display</Link>
                </li>

                <li>
                    <Link to="/Input">Input</Link>
                </li>
            </ul>
        </nav>
    )

}
export default Nav;