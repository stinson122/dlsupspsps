import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom'; // Import useHistory hook
import { UserContext } from './UserContext';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(UserContext);
    const history = useHistory(); // Use useHistory hook to navigate after successful login

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const user = await response.json();
                login(user); // Call the login function provided by UserContext to update the user state
                history.push('/userpage'); // Redirect to user page after successful login
            } else {
                // Handle login error
                console.error('Login failed');
            }
        } catch (error) {
            // Handle network error
            console.error('Network error:', error);
        }
    };

    return (
        <div className="w-6/12">
            <div>
                <form onSubmit={handleLogin} className="flex flex-col bg-burnt-sienna rounded-lg p-6 gap-4">
                    <input
                        type="text"
                        placeholder="Username..."
                        className="py-2.5 px-3.5 rounded-lg"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password..."
                        className="py-2.5 px-3.5 rounded-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex justify-between items-center">
                        <Link to="/signup" className="text-beige hover:underline">Not Registered? Sign-up</Link>
                        <button type="submit" id="loginButton" className="py-2.5 px-3.5 bg-olive text-white font-bold rounded-lg">Enter</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
