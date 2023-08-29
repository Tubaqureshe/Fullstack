import React, { useContext, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { GlobalContext } from '../../../Context/context';
import Swal from 'sweetalert2';
// import './AuthForm.css'; // Import your CSS file for styling

export default function AuthForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const { state, dispatch } = useContext(GlobalContext);

    const handleAuth = (e) => {
        e.preventDefault();

        const payload = { email, password, username };

        const apiUrl = isLogin ? 'http://localhost:3000/api/login' : 'http://localhost:3000/api/signup';

        axios.post(apiUrl, payload)
            .then((json) => {
                console.log('Response Data:', json.data); // Log the response data

                if (isLogin) {
                    Cookies.set('token', json.data.token);
                    dispatch({
                        type: 'USER_LOGIN',
                        token: json.data.token,
                    });

                    Swal.fire({
                        icon: 'success',
                        title: 'Logged In',
                        text: 'You have successfully logged in!',
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Something went wrong!',
                        text: 'You have successfully signed up! You can now log in.',
                    });
                }
            })
            .catch((err) => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: isLogin ? 'Login Failed' : 'Sign Up Failed',
                    text: `There was an error ${isLogin ? 'logging in' : 'signing up'}. Please check your credentials and try again.`,
                });
            });
    }

    return (
        <div className={`flip-card__auth ${isLogin ? 'login' : 'signup'}`}>
            <div className="title">{isLogin ? 'Log in' : 'Sign up'}</div>
            <form className="flip-card__form" onSubmit={handleAuth}>
                {!isLogin && (
                    <input
                        className="flip-card__input"
                        placeholder="Name"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                )}
                <input
                    className="flip-card__input"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="flip-card__input"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="flip-card__btn">{isLogin ? "Let's go!" : "Confirm!"}</button>
            </form>
            <div className="flip-card__auth-toggle">
                {isLogin ? (
                    <>
                        Don't have an account?{' '}
                        <button onClick={() => setIsLogin(false)}>Sign Up</button>
                    </>
                ) : (
                    <>
                        Already have an account?{' '}
                        <button onClick={() => setIsLogin(true)}>Log In</button>
                    </>
                )}
            </div>
        </div>
    );
}
