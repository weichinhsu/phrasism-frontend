import React, { Component } from 'react';
// import { Route, Switch, BrowserRouter } from 'dva/router';
import { Route, Switch, BrowserRouter } from "react-router-dom";
// import AppSwitch from './routes/AppSwitch'
import Home from './routes/Home';

// const routes = [{
//     name: 'home',
//     path: '/',
//     component: Home,
// }]

export default (props) => {
    return (
        <BrowserRouter basename='/'>
            <Switch>
                <Route path="/" exact component={Home} />
                {/* <AppSwitch>
                    {routes.map(item => (<Route key={item.path} path={item.path} exact component={item.component} />))}
                </AppSwitch> */}
            </Switch>
        </BrowserRouter>
    )
}