import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage.jsx';
import LoginPage from './LoginPage.jsx';
import SignUpPage from './SignUpPage.jsx';
import AboutPage from './AboutPage.jsx';
import UserProfile from "./UserProfile.jsx";
import ProfilePage from "./ProfilePage.jsx";

export default App;

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/userpage" element={<ProfilePage/>} />
            </Routes>
        </Router>
    );
}
