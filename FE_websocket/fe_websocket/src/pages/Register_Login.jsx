import React from 'react';
import Register from '../components/Register-Login/Register';
import Login from '../components/Register-Login/Login';
import '../assets/css/login_register.css';
import { useState } from 'react';
import { useEffect } from 'react';

const RegisterLogin = () => {
    const [isSignUp, setSignUp] = useState(false);
    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');
        if (isSignUp) {
            signInButton.addEventListener('click', () => {
                container.classList.remove("right-panel-active");
            });
        } else {
            signUpButton.addEventListener('click', () => {
                container.classList.add("right-panel-active");
            });
        }
    }, [isSignUp])
    return (
        <>
            <div className="container" id="container">
                <Register />
                <Login />
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn">
                                Sign In
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button onClick={() => {
                                setSignUp(!isSignUp)
                            }} className="ghost" id="signUp">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <p>
                    Created with <i className="fa fa-heart" /> by
                    <a target="_blank" href="https://florin-pop.com">
                        Florin Pop
                    </a>
                    - Read how I created this and how you can join the challenge
                    <a
                        target="_blank"
                        href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/"
                    >
                        here
                    </a>
                    .
                </p>
            </footer>
        </>
    );
}

export default RegisterLogin;
