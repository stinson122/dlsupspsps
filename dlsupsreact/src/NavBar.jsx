import React from 'react';
import './styles.css'
import './input.css'
import './output.css'
import { Link } from 'react-router-dom';

export default NavBar;
function NavBar({ isLoggedIn, onLogout }) {
    return (
        <header className="flex h-20 justify-between items-center bg-wow-yellow p-0 px-10">
            <div className="logo">
                <Link to="/" className="text-beige no-underline">
                    <h1 className="m-0 text-3xl font-bold">DLSU3PS</h1>
                </Link>
            </div>

            <nav className="flex">
                {isLoggedIn ? (
                    <>
                        <a href="#" className="text-beige no-underline mx-5 hover:text-beige" onClick={onLogout}>Logout</a>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="text-beige no-underline mx-5 hover:text-beige">Login</Link>
                        <Link to="/signup" className="text-beige no-underline mx-5 hover:text-beige">Sign-up</Link>
                    </>
                )}
                <Link to="/about" className="text-beige no-underline mx-5 hover:text-beige">About</Link>
            </nav>
        </header>
    );
}



