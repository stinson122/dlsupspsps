import './output.css'
import './login-store.js'
export default LoginForm;

import React from 'react';
import {Link} from "react-router-dom";

function LoginForm() {
    return (
        <div className="w-6/12">
            <div className="flex flex-col bg-burnt-sienna rounded-lg p-6 gap-4">
                <form>
                <input id="usernameInput" type="text" placeholder="Username..."
                       className="py-2.5 px-3.5 rounded-lg"/>
                <input type="password" placeholder="Password..."
                       className="py-2.5 px-3.5 rounded-lg"/>
                <div className="flex justify-between items-center">
                    <Link to="/signup" className="text-beige hover:underline">Not
                        Registered? Sign-up</Link>
                    <button id="loginButton"
                            className="py-2.5 px-3.5 bg-olive text-white font-bold rounded-lg">Enter
                    </button>
                </div>
                </form>
            </div>
        </div>
    );
}


