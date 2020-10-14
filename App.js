import React from "react";
import Home from './layout/Home';
import Login from './layout/login/Login';
import { NativeRouter, Switch, Route, Link, Router } from "react-router-native";
import { Redirect } from 'react-router'
export default function App(){
  return (
    <NativeRouter>
      <Redirect exact from="/layout" to="./layout/Home" />
        <Route path="./layout/Home">
          <Login />
        </Route>
    </NativeRouter>
  )
}
