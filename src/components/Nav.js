import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <nav>
            <ul className="flex flex-row w-full bg-blue-700 ">
                <li className="py-3 px-6 text-white hover:bg-blue-500">
                    <Link to="/">Home</Link>
                </li>

                <li className="py-3 px-6 text-white hover:bg-blue-500">
                    <Link to="/Display">Display</Link>
                </li>

                <li className="py-3 px-6 text-white hover:bg-blue-500">
                    <Link to="/Input">Input</Link>
                </li>
            </ul>
        </nav>
    )

}
export default Nav;