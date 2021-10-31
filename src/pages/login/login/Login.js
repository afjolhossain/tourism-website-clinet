import React from 'react';
import useAuth from '../../../hooks/UseAuth';
import './Login.css';

const Login = () => {
    const {singInUsingGoole} = useAuth();
    return (
        <div className="login-google">
            <div className="login">
            <h2>Please Login</h2>
             <h3>with</h3>
            <button onClick={singInUsingGoole} className="btn btn-warning">Sign In Google</button>
        </div>
        </div>
    );
};

export default Login;