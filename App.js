import React from "react";
import Home from './layout/Home';
import Login from './layout/login/Login';
import Product from './Product';
import { NativeRouter, Switch, Route, Link, Router } from "react-router-native";
import createHistory from 'history/createMemoryHistory';
import { AppLoading } from 'expo';
const history = createHistory();



export default class App extends React.Component {
  state = {
    isReady: false,
  };
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      ); }
      return (
        <NativeRouter>
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/Home" component={Home} />
            </Switch>
          </Router>
        </NativeRouter>
      )
  }

  async _cacheResourcesAsync() {
    const images = [require('./assets/shin.jpg')];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    }); 
    return Promise.all(cacheImages);
  }
}