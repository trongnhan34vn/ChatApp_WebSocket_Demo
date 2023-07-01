import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie'
import { login } from '../../redux/reducers/userSlice';
import { userSelector } from '../../redux/selector';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [cookies, setCookies] = useCookies(['email', 'fullName', 'id'])
    const currentUser = useSelector(userSelector).currentUser;
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        setInputValue({ ...inputValue, [key]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(inputValue))
    }

    useEffect(() => {
        currentUser && setCookies('id', currentUser.id, { path: '/', maxAge: 86400 })
        currentUser && setCookies('email', currentUser.email, { path: '/', maxAge: 86400 })
        currentUser && setCookies('fullName', currentUser.fullName, { path: '/', maxAge: 86400 })
        if (currentUser !== null) {
            navigate('/messages')
        }
    }, [currentUser])
    return (
        <div className="form-container sign-in-container">
            <form action="#">
                <h1>Sign in</h1>
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
                <span>or use your account</span>
                <input value={inputValue.email} onChange={handleChange} name='email' type="email" placeholder="Email" />
                <input value={inputValue.password} onChange={handleChange} name='password' type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button onClick={handleSubmit}>Sign In</button>
            </form>
        </div>
    );
}

export default Login;
