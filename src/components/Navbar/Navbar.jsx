import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../UI/MyButton/MyButton";
import {AuthContext} from "../../context";

const Navbar = () => {
    const {setIsAuth} = useContext(AuthContext);

    const onLogout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth');
    }

    return <div className="navbar">
        <div className="navbar-links">
            <Link to="about">O сайте</Link>
            <Link to="posts">Посты</Link>
            <Link to="checkbox">checkbox</Link>
        </div>
        <div>
            <MyButton onClick={onLogout}>Exit</MyButton>
        </div>
    </div>
};

export default Navbar;