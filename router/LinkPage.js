import React from "react";
import Home from '../layout/Home';
import Login from '../layout/login/Login';
import Product from '../Product';
import { NativeRouter, Switch, Route, Link, Router } from "react-router-native";
import createHistory from 'history/createMemoryHistory';

const history = createHistory();

export function LinkPage(){
    return (
        <NativeRouter>
            <Router history={history}>
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route exact path="/product" component={Product} />
                </Switch>
            </Router>
        </NativeRouter>
    )
}