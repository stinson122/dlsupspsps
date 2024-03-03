import React, { useState } from 'react';
import Navbar from './NavBar';
export default LandingPage;

function LandingPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        // Perform logout actions (e.g., clear session, redirect to login page, etc.)
        setIsLoggedIn(false);
    };

    return (
        <div className="bg-beige font-roboto m-0 p-0 h-screen flex flex-col">
            <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout}/>
            <div className="flex justify-center items-center h-screen flex-col">
                <div className="text flex w-full max-w-md flex-col justify-center items-center">
                    <p className="text-olive text-center text-6xl font-black">DLSU PUSA FORUMS</p>
                </div>
                <div className="flex justify-center items-center mt-5 gap-4">
                    <div
                        className="w-52 h-80 rounded-lg border border-black flex justify-center items-center overflow-hidden">
                        <img src="/images/mimiw1.png" alt="Image description"
                             className="w-full h-full object-cover"/>
                    </div>
                    <div
                        className="w-52 h-80 rounded-lg border border-black flex justify-center items-center overflow-hidden">
                        <img src="/images/mimiw2.png" alt="Image description"
                             className="w-full h-full object-cover"/>
                    </div>
                    <div
                        className="w-52 h-80 rounded-lg border border-black flex justify-center items-center overflow-hidden">
                        <img src="/images/mimiw3.png" alt="Image description"
                             className="w-full h-full object-cover"/>
                    </div>
                    <div
                        className="w-52 h-80 rounded-lg border border-black flex justify-center items-center overflow-hidden">
                        <img src="/images/mimiw4.png" alt="Image description"
                             className="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
        </div>
    );
}