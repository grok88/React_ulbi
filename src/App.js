import React, {useEffect, useState} from 'react';
import './styles/app.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRoute from "./components/AppRoute/AppRoute";
import {AuthContext} from "./context";


function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        if(localStorage.getItem('auth') === 'true'){
            setIsAuth(true);

        }
        setIsLoading(false);
    }, []);

    return <div className="App">
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRoute/>
            </BrowserRouter>
        </AuthContext.Provider>
    </div>
}

export default App;
