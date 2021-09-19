import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../../route/route";
import {AuthContext} from "../../context";
import MyLoader from "../UI/MyLoader/MyLoader";

const AppRoute = () => {
    const {isAuth, isLoading} = useContext(AuthContext);


    if (isLoading) {
        return <MyLoader/>
    }

    return <>
        {
            isAuth
                ? <Switch>
                    {privateRoutes.map((route, i) => {

                        return <Route key={i} path={route.path} exact={route.exact}
                               component={route.component}/>})
                    }
                    <Redirect to='/posts'/>
                </Switch>
                : <Switch>
                    {publicRoutes.map((route, i) => <Route key={i} path={route.path} exact={route.exact}
                                                           component={route.component}/>)}
                    <Redirect to='/login'/>
                </Switch>
        }
    </>
};

export default AppRoute;