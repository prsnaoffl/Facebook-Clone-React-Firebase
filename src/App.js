import React from 'react'
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom";
import Home from "./Pages/Home"; 
import {Provider} from "react-redux";
import {createStore} from "redux";
import useReducer from "./Store/Reducer/User";
import "./App.css";

const store=createStore(useReducer);

const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
    </Provider>
  )
}

export default App
