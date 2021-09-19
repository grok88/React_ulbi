import React, {useContext} from 'react';
import MyInput from "../components/UI/MyInput/MyInput";
import MyButton from "../components/UI/MyButton/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {setIsAuth} = useContext(AuthContext);

    const login = (e) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', true);
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={login}>
                <MyInput type='text' placeholder='Enter Login'/>
                <MyInput type='password' placeholder='Enter password'/>
                <MyButton>LogIn</MyButton>
            </form>
        </div>
    );
};

export default Login;