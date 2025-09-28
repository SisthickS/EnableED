import React from "react";
import "./App.css";

function App() {
    return (
        <header>
            <div>
                {/* Logo */}
                <div className="logo">
                    <img
                        src="https://via.placeholder.com/50"
                        alt="Company Logo"
                    />
                    <span>EnableED</span>
                </div>

                {/* Navigation */}
                <nav>
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>

                {/* Buttons */}
                <div className="buttons">
                    <button className="login">Login</button>
                    <button className="signup">Sign Up</button>
                </div>
            </div>
        </header>
    );
}

export default App;
