import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { register } from '../../redux/reducers/userSlice';

const Register = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState({
        fullName: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        let value = e.target.value;
        let key = e.target.name;
        setInputValue({ ...inputValue, [key]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(inputValue));
    }
    return (
        <div className="form-container sign-up-container">
            <form action="#">
                <h1>Create Account</h1>
                <div className="social-container">
                    <a href="#" className="social">
                        <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#" className="social">
                        <i className="fab fa-google-plus-g" />
                    </a>
                    <a href="#" className="social">
                        <i className="fab fa-linkedin-in" />
                    </a>
                </div>
                <span>or use your email for registration</span>
                <input value={inputValue.fullName} onChange={handleChange} name='fullName' type="text" placeholder="Name" />
                <input value={inputValue.email} onChange={handleChange} name='email' type="email" placeholder="Email" />
                <input value={inputValue.password} onChange={handleChange} name='password' type="password" placeholder="Password" />
                <button onClick={handleSubmit}>Sign Up</button>
            </form>
        </div>
    );
}

export default Register;
